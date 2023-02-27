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

export async function getPlayersAverageBmi(prisma: PrismaClient) {
  return prisma.player.findMany()
    .then(players => players.reduce((sum, player) => sum + ((player.weight / 1000) / Math.pow(player.height / 100, 2)), 0) / players.length);
}

export async function getPlayersHeightMedian(prisma: PrismaClient) {
  return prisma.player.findMany({
    orderBy: {
      height: 'asc'
    }
  })
  .then(players => players.length ? players[Math.floor(players.length / 2)].height : 0);
}