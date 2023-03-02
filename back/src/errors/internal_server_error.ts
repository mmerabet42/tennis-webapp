import BaseError from "./custom_error.js";

export default class InternalError extends BaseError {
  errorType = InternalError.name;
  errorCode = 500;

  constructor(message: string) {
    super(message);
  }

  errors() {
    return [
      { messages: [this.message] }
    ]
  };
}