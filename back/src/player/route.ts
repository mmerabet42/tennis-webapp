import { Router } from "express";

import { CustomResponse } from "../interfaces";
import {
  getPlayerById, getPlayerTitlesByPlayerId, getPlayersOrderByRank,
  getPlayersAverageBmi, getPlayersHeightMedian
} from "./db.js";

const router = Router();

router.get("/", async (req, res: CustomResponse) => {
  const players = await getPlayersOrderByRank(res.locals.prisma);
  return res.json(players);
});

router.get("/stats", async (req, res: CustomResponse) => {
  res.json({
    averageBmi: await getPlayersAverageBmi(res.locals.prisma),
    heightMedian: await getPlayersHeightMedian(res.locals.prisma),
  });
});

router.get("/titles/:playerId", async (req, res: CustomResponse) => {
  const titles = await getPlayerTitlesByPlayerId(res.locals.prisma, req.params.playerId);
  res.json(titles);
});

router.get("/:id", async (req, res: CustomResponse) => {
  const player = await getPlayerById(res.locals.prisma, req.params.id);
  res.json(player);
});

export default router;