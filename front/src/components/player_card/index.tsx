import { PlayerInfos } from "../../interfaces";
import PlayerInfoDetail from "../player_info_detail";

type Props = {
  playerInfo: PlayerInfos,
  onSelected: (playerInfo: PlayerInfos) => void | undefined
}

export default function PlayerCard({ playerInfo, onSelected }: Props) {
  return (
    <div
      className="flex flex-row items-center overflow-hidden
                 bg-white pr-5 xs:pr-14 py-5 xs:py-0 space-x-5
                  drop-shadow-2xl
                  cursor-pointer
                  hover:scale-105 transition-all duration-300 ease-out"
      onClick={onSelected?.bind(null, playerInfo)}
    >

      <div className="absolute bottom-0 -left-3 sm:left-0 items-start justify-center overflow-hidden
                      w-40 h-32 xs:w-60 xs:h-40">
        <img  alt={`player ${playerInfo.firstname} ${playerInfo.lastname}`}
              src={playerInfo.pictureUrl} />
      </div>
      <div className="w-24 xs:w-44 aspect-square"></div>

      <div className="flex flex-col space-y-10 flex-grow">
        <p className="text-primary font-bold text-xl">{playerInfo.firstname} {playerInfo.lastname}</p>

        <div className="flex flex-row justify-between">
          <PlayerInfoDetail title="Rank" value={`#${playerInfo.rank}`} />
          <PlayerInfoDetail title="Points" value={`${playerInfo.points}`} />
          <PlayerInfoDetail title="Country" value={`${playerInfo.countryName}`} />
        </div>
      </div>
    </div>
  );
}