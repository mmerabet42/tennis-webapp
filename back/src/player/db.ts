import { PrismaClient } from "@prisma/client";

export async function getPlayersOrderByRank(prisma: PrismaClient) {
  return prisma.player.findMany({
    orderBy: {
      rank: "asc"
    }
  });
}

export async function getPlayerById(prisma: PrismaClient, playerId: string) {
  return prisma.player.findUnique({
    where: { id: playerId },
    include: { titles: true }
  });
}

export async function getPlayerTitlesByPlayerId(prisma: PrismaClient, playerId: string) {
  return prisma.playerTitle.findMany({
    where: { playerId: playerId },
    select: { content: true }
  });
}