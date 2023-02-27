import { RxCross1 } from 'react-icons/rx';

import { PlayerInfos } from "../../interfaces"
import FullName from "./full_name";
import Country from "./country";
import PlayerInfoDetail from "../player_info_detail";
import BigPlayerImg from "./big_player_img";
import CareerTitles from "./career_titles";

type Props = {
  playerInfo: PlayerInfos | undefined,
  onClose: () => void
}

export default function PlayerDetailsModal({ playerInfo, onClose }: Props) {
  if (!playerInfo)
    return null;

  return (
    <div className="absolute inset-0 1md:container-padding bg-black bg-opacity-70 flex flex-col">
      <RxCross1 onClick={onClose} className="text-white self-center text-4xl
                                            cursor-pointer my-10 min-w-full 1md:min-w-0
                                            hover:scale-125 transition-all duration-300 ease-out" />

      <div className="bg-white flex-grow overflow-y-scroll scrollbar-custom">
        <BigPlayerImg firstname={playerInfo.firstname} lastname={playerInfo.lastname} pictureUrl={playerInfo.pictureUrl} />

        <div className="flex flex-col p-10 1md:pl-32 lg:pl-56 1md:pr-20 space-y-20 grow">
          <div className="flex flex-row justify-between">
            <FullName firstname={playerInfo.firstname} lastname={playerInfo.lastname} />
            <Country countryPictureUrl={playerInfo.countryPictureUrl} countryCode={playerInfo.countryCode} />
          </div>

          <div className="flex flex-col xl:flex-row justify-between
                          1md:pl-14 space-y-10 xl:space-x-10 xl:space-y-0 flex-1">

            <div className="flex flex-col flex-[2]">
              <div className="grid grid-rows-3 grid-flow-col gap-y-10">
                  <PlayerInfoDetail title="Rank" value={`#${playerInfo.rank}`} />
                  <PlayerInfoDetail title="Birthday" value={"DD/MM/YYYY"} />
                  <PlayerInfoDetail title="Weight" value={`${playerInfo.weight / 1000} Kg`} />
                  <PlayerInfoDetail title="Points" value={playerInfo.points.toString()} />
                  <PlayerInfoDetail title="Age" value={playerInfo.age.toString()} />
                  <PlayerInfoDetail title="Height" value={`${playerInfo.height} cm`} />
                  <PlayerInfoDetail title="Country" value={playerInfo.countryName} />

                  {/* {[
                    ["Rank", `#${playerInfo.rank}`],
                    ["Birthday", "DD/MM/YYYY"],
                    ["Weight", `${playerInfo.weight / 1000} Kg`],
                    ["Points", playerInfo.points.toString()],
                    ["Age", playerInfo.age.toString()],
                    ["Height", `${playerInfo.height} cm`],
                    ["Country", playerInfo.countryName],
                  ].map(([title, value]) => (
                    <PlayerInfoDetail title={title} value={value} />
                  ))} */}
              </div>
              {/*
                Here i am using a little trick so that the div above only takes the space it really needs
                the div below will grow, thus taking the remaining height
              */}
              <div className="flex-grow"></div>
            </div>

            <div className="flex flex-col space-y-10 flex-[1] flex-grow">
              <CareerTitles playerId={playerInfo.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}