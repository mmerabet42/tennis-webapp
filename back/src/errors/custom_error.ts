export type ErrorType = {
  messages: string[]
}

export default abstract class BaseError extends Error {
  abstract errorCode: number;
  abstract errorType: string;

  constructor(message: string) {
    super(message);
  }

  abstract errors(): ErrorType[];
}