import express from 'express';
import cors from 'cors';

import playerRouter from './player/route.js';
import { PrismaClient } from '@prisma/client';
import prismaMiddleware from './middlewares/prisma_middleware.js';
import errorMiddleware from './middlewares/error_middleware.js';

const port = Number(process.env.SERVER_PORT || 5000);
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(prismaMiddleware(prisma));

app.use("/player", playerRouter);

app.use(errorMiddleware());

// Healthcheck
app.use("/", (req, res) => res.send(""));

app.listen(port, () => console.log(`Api is running on port ${port}`));