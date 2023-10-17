import { fetchSSE } from '../fetch-sse'
import { GenerateAnswerParams, Provider } from '../types'
import { getProviderConfigs, ProviderType, DEFAULT_MODEL, DEFAULT_API_HOST } from '@/config'

export class OpenAIProvider implements Provider {
  constructor(private token: string, private model: string) {
    this.token = token
    this.model = model
  }

  // 模型：text-davinvi-003
  private buildPrompt(prompt: string): string {
    if (this.model.startsWith('text-chat-davinci')) {
      return `Respond conversationally.<|im_end|>\n\nUser: ${prompt}<|im_sep|>\nChatGPT:`
    }
    return prompt
  }

  // 模型：gpt-3.5-turbo
  private buildMessages(prompt: string) {
    return [{ role: 'user', content: prompt }]
  }

  async generateAnswer(params: GenerateAnswerParams) {
    const [config] = await Promise.all([getProviderConfigs()])

    const gptModel = config.configs[ProviderType.GPT3]?.model ?? DEFAULT_MODEL
    const apiHost = config.configs[ProviderType.GPT3]?.apiHost || DEFAULT_API_HOST
    const apiPath = config.configs[ProviderType.GPT3]?.apiPath

    let url = ''
    let reqParams = {
      model: this.model,
      // prompt: this.buildPrompt(params.prompt),
      // messages: this.buildMessages(params.prompt),
      stream: true,
      max_tokens: 800,
      // temperature: 0.5,
    }
    if (gptModel === 'text-davinci-003') {
      url = `https://${apiHost}${apiPath || '/v1/completions'}`
      reqParams = { ...reqParams, ...{ prompt: this.buildPrompt(params.prompt) } }
    } else {
      url = `https://${apiHost}${apiPath || '/v1/chat/completions'}`
      reqParams = { ...reqParams, ...{ messages: this.buildMessages(params.prompt) } }
    }
    console.log("---->")
    console.log(reqParams)
    console.log("---->")

    let result = ''
    await fetchSSE(url, {
      method: 'POST',
      signal: params.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(reqParams),
      onMessage(message) {
        console.debug('sse message', message)
        if (message === '[DONE]') {
          params.onEvent({ type: 'done' })
          return
        }
        let data
        try {
          data = JSON.parse(message)
          const text =
            gptModel === 'text-davinci-003' ? data.choices[0].text : data.choices[0].delta.content
          
          // 需要注意，这里的请求中有一个重要的参数stream: true
          // 所以返回的是一个个chat.completion.chunk
          //console.log(gptModel)
          //console.log(data.choices[0].delta.content)

          if (text === undefined || text === '<|im_end|>' || text === '<|im_sep|>') {
            return
          }
          result += text
          params.onEvent({
            type: 'answer',
            data: {
              text: result,
              messageId: data.id,
              conversationId: data.id,
            },
          })
        } catch (err) {
          // console.error(err)
          return
        }
      },
    })

    console.log(result)

    return {}
  }
}
