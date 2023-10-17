import { Answer } from '../messaging'

export type Event =
  | {
      type: 'answer'
      data: Answer
    }
  | {
      type: 'done'
    }

export interface GenerateAnswerParams {
  prompt: string
  onEvent: (event: Event) => void
  signal?: AbortSignal
}

export interface Provider {
  generateAnswer(params: GenerateAnswerParams): Promise<{ cleanup?: () => void }>
}
/*
from chatpgt:
generateAnswer(params: GenerateAnswerParams): Promise<{ cleanup?: () => void }>: This is the method declaration within the Provider interface. It specifies the signature and return type of the method.

generateAnswer is the name of the method.

(params: GenerateAnswerParams) describes the parameter that generateAnswer accepts. The GenerateAnswerParams is likely another interface or type defined elsewhere in the codebase.

Promise<{ cleanup?: () => void }> indicates that the method returns a Promise. The resolved value of the promise is an object with an optional property cleanup that is a function taking no arguments and returning no value.
*/