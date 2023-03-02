import { Router } from "express";

import { CustomResponse } from "../interfaces";
import {
  getPlayerById, getPlayerTitlesByPlayerId, getPlayersOrderByRank,
  getPlayersAverageBmi, getPlayersHeightMedian
} from "./db.js";
import InternalServerError from "../errors/internal_server_error.js";
import ValidationError from "../errors/validation_error.js";

const router = Router();

router.get("/", async (req, res: CustomResponse, next) => {
  getPlayersOrderByRank(res.locals.prisma)
    .then(players => res.json(players))
    .catch(err => next(new InternalServerError("Internal error")));
});

router.get("/stats", async (req, res: CustomResponse, next) => {
  try {
    res.json({
      averageBmi: await getPlayersAverageBmi(res.locals.prisma),
      heightMedian: await getPlayersHeightMedian(res.locals.prisma),
    });
  } catch (err) {
    next(new InternalServerError(`Internal error ${err}`));
  };
});

router.get("/titles/:playerId", async (req, res: CustomResponse, next) => {
  getPlayerTitlesByPlayerId(res.locals.prisma, req.params.playerId)
    .then(titles => res.json(titles))
    .catch(err => next(new InternalServerError("Internal error")));
});

router.get("/:id", async (req, res: CustomResponse, next) => {
  getPlayerById(res.locals.prisma, req.params.id)
    .then(player => {
      if (!player)
        return next(new ValidationError("Player doesn't exist", "id"));
      res.json(player);
    })
    .catch(err => next(new InternalServerError("Internal error")));
});

export default router;