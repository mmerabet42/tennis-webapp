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



// function makeError(errorCode: number, errorType: string) {
//   return class ExtendedBaseError extends BaseError {
//     errorCode = errorCode;
//     errorType = errorType;

//     constructor(message: string) { super(message); }

//     errors() {
//         return [this.message];
//     }
//   }
// }

// const InternalError = makeError(500, "INTERNAL_ERROR");