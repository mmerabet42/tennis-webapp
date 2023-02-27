import { useEffect, useState } from "react";
import { CgTennis } from "react-icons/cg";

import PlayerInfoDetail from "../player_info_detail";
import { PlayerTitle } from "../../interfaces";
import config from '../../config';

type Props = {
  playerId: string
}

export default function CareerTitles({ playerId }: Props) {
  const [playerTitles, setPlayerTitles] = useState<PlayerTitle[] | undefined>();

  useEffect(() => {
    fetch(`${config.API_URL}/player/titles/${playerId}`)
    .then(response => {
      if (!response.ok)
        throw new Error(response.statusText);
      return response.json();
    })
    .then(setPlayerTitles);
  }, [playerId]);

  return (
    <>
      <PlayerInfoDetail title="Career titles" value={undefined} />
      {!playerTitles
        ? <CgTennis className="animate-spin text-primary text-5xl self-center flex-grow" />
        : playerTitles.map(playerTitle =>
          <p key={playerTitle.id} className="text-primary text-sm font-semibold">{playerTitle.content}</p>
        )
      }
    </>
  );
}