import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import BaseError, { ErrorType } from "../errors/custom_error";

type ErrorTypeMiddleware = {
  errorType: string;
  errorCode: number;
  errors: ErrorType[]
};

interface CustomErrorResponse extends Response {
  json: (body?: ErrorTypeMiddleware) => this
}

export default function errorMiddleware(): ErrorRequestHandler {
  return (err: BaseError, req, res: CustomErrorResponse, next) => {
    res.status(err.errorCode).json({
      errorType: err.errorType,
      errorCode: err.errorCode,
      errors: err.errors()
    });
  }
}