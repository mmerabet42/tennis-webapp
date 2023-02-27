import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

export default function prismaMiddleware(prisma: PrismaClient): RequestHandler {
  return (req, res, next) => {
    res.locals.prisma = prisma;
    next();
  };
}