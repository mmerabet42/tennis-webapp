import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

export default function prismaMiddleware(prisma: PrismaClient): RequestHandler {
  return (req, res, next) => {
    // we need to reconnect to the database in case we've been discronnected
    // i've noticed that prisma doesn't reconnect automatically in that case
    // and unfortunately there are no functions that checks if we're currently connected or not
    // so we've no choice of trying to reconnect at every request
    // (but i'm pretty sure that prisma checks internally if it is already connected anyway)
    prisma.$connect().then(() => {
      res.locals.prisma = prisma;
      next();
    })
  };
}