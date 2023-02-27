import { PrismaClient } from "@prisma/client";
import { Response } from "express";

// In order to have access to the prisma client from the response locals
// we need to extend the express response type
export interface CustomResponse extends Response {
  locals: {
    prisma: PrismaClient
  }
}