import fs from "fs";
import { PrismaClient, Prisma, Player } from "@prisma/client";
import { loremIpsum } from "lorem-ipsum";
import got from "got";

// import { PlayerInfos, PlayerTitle } from "./player/interfaces";

const prisma = new PrismaClient();

fs.readFile("./res/headtohead.json", "utf-8", async (err, data) => {
  const playersData = JSON.parse(data);
  // We need to get the country names as we only have the country codes, we will use the restcountries api
  const countries = await Promise.all(playersData.players.map((player: any) => got(`https://restcountries.com/v3.1/alpha?codes=${player.country.code}&fields=name`).json()));

  // Reset the player and playerTitle tables
  await prisma.playerTitle.deleteMany();
  await prisma.player.deleteMany();
  
  // Insert all the player read from the file into the player table and generate 5 random titles for each players
  await prisma.player.createMany({
    data: playersData.players.map((player: any, index: number): Prisma.PlayerCreateInput => ({
      firstname: player.firstname,
      lastname: player.lastname,
      shortname: player.shortname,
      sex: player.sex,
      countryCode: player.country.code,
      countryName: countries[index][0].name.common,
      countryPictureUrl: player.country.picture,
      pictureUrl: player.picture,
      rank: player.data.rank,
      points: player.data.points,
      weight: player.data.weight,
      height: player.data.height,
      age: player.data.age,
      // I wanted to make a nested create many for the titles, but unfortunately prisma doesn't allow this
      // titles: {
      //   create: Array.from({length: 5}, () => ({
      //     content: loremIpsum({
      //       count: 2,
      //       units: "sentence",
      //       format: "plain"
      //     })
      //   }))
      // }
    }))
  });

  const range = Array.from(Array(5).keys());
  (await prisma.player.findMany()).forEach(async player => {
    await prisma.playerTitle.createMany({
      data: range.map((): Prisma.PlayerTitleCreateManyInput => ({
        playerId: player.id,
        content: loremIpsum({
          count: 2,
          units: "sentence",
          format: "plain"
        })
      }))
    });
  });
});