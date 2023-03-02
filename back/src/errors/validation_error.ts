import BaseError from "./custom_error.js";

export default class ValidationError extends BaseError {
  errorType = ValidationError.name;
  errorCode = 500;

  constructor(message: string, private property: string) {
    super(message);
  }

  errors() {
    return [
      { messages: [this.message, this.property] }
    ]
  };
}