import { Router } from "express";

import { CustomResponse } from "../interfaces";
import { getPlayerById, getPlayerTitlesByPlayerId, getPlayersOrderByRank } from "./db.js";

const router = Router();

router.get("/", async (req, res: CustomResponse) => {
  const players = await getPlayersOrderByRank(res.locals.prisma);
  return res.json(players);
});

router.get("/:id", async (req, res: CustomResponse) => {
  const player = await getPlayerById(res.locals.prisma, req.params.id);
  res.json(player);
});

router.get("/titles/:playerId", async (req, res: CustomResponse) => {
  const titles = await getPlayerTitlesByPlayerId(res.locals.prisma, req.params.playerId);
  res.json(titles);
});

export default router;