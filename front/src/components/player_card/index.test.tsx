import { findByText, fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PlayerCard from '.';
import { PlayerInfos } from '../../interfaces';

const playerInfos: PlayerInfos = {
  id: "id",
  firstname: "firstname",
  lastname: "lastname",
  shortname: "shortname",
  sex: "sex",
  countryCode: "countryCode",
  countryName: "countryName",
  countryPictureUrl: "countryPictureUrl",
  pictureUrl: "pictureUrl",
  rank: 0,
  points: 1,
  weight: 2,
  height: 3,
  age: 4,
  last: [0]
};

describe(PlayerCard.name, () => {
  it("Must contain name, rank, points and country", async () => {
    render(<PlayerCard
      playerInfo={playerInfos}
      onSelected={_ => {}}
    />);
  
    [
      `${playerInfos.firstname} ${playerInfos.lastname}`,
      `${playerInfos.rank}`,
      `${playerInfos.points}`,
      `${playerInfos.countryName}`
    ].forEach(async text => {
      const htmlElem = await screen.findByText(text);
      expect(htmlElem).toBeVisible();
    });
  });
  
  it("Must not contain other elements", async () => {
    render(<PlayerCard
      playerInfo={playerInfos}
      onSelected={_ => {}}
    />);
  
    [
      `${playerInfos.age}`,
      `${playerInfos.weight}`,
      `${playerInfos.countryCode}`,
    ].forEach(async text => {
      const htmlElem = await screen.findByText(text);
      expect(htmlElem).not.toBeVisible();
    });
  });
  
  it("Must be fully clickable", async () => {
    const syper = jest.fn();
    const onSelected = (player: PlayerInfos) => {
      expect(player).toBe(playerInfos);
      syper();
    };

    render(<PlayerCard
      playerInfo={playerInfos}
      onSelected={onSelected}
    />);
  
    const elem = await screen.findByText(`${playerInfos.firstname} ${playerInfos.lastname}`);
    fireEvent.click(elem);
    expect(syper).toHaveBeenCalledTimes(1);
  });
});