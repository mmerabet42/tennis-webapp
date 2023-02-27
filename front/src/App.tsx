import { useEffect, useMemo, useState } from "react";

import config from './config.json';
import PlayerCard from "./components/player_card";
import { PlayerInfos } from "./interfaces";
import SearchBar from "./components/search_bar";
import PlayerDetailsModal from "./components/player_details_modal";
import DebugScreens from "./components/debug_screens";

export default function App() {
  const [searchValues, setSearchValues] = useState<string[]>([]);

  const [playersInfo, setPlayersInfo] = useState<PlayerInfos[]>([]);
  const [currentPlayerInfo, setCurrentPlayerInfo] = useState<PlayerInfos | undefined>(undefined)

  useEffect(() => {
    fetch(`${config.API_URL}/player`)
    .then(response => {
      if (!response.ok)
        throw new Error(response.statusText);
      return response.json();
    })
    .then(setPlayersInfo)
  }, []);

  const filterPlayers = useMemo(() => {
    return playersInfo.filter(playerInfo =>
      !searchValues.length || searchValues.every(searchValue =>
        playerInfo.firstname.toLowerCase().includes(searchValue) || playerInfo.lastname.toLowerCase().includes(searchValue) ||
        playerInfo.countryName.toLowerCase().includes(searchValue) || playerInfo.shortname.toLowerCase().includes(searchValue) ||
        playerInfo.countryCode.toLowerCase().includes(searchValue)
      )
    );
  }, [playersInfo, searchValues]);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-primary via-secondary to-secondary font-Montserrat
                    flex px-5 md:container-padding justify-center lg:justify-start
                    ${currentPlayerInfo ? "max-h-0 overflow-hidden fixed w-screen" : ""}`}>

      <div className="flex flex-col space-y-4 mb-10 min-w-full sm:min-w-cards-container-width">
        <SearchBar
          show={!currentPlayerInfo}
          onChange={event => setSearchValues(event.target.value.toLowerCase().split(' '))}
        />
        {filterPlayers.map(playerInfo =>
          <PlayerCard key={playerInfo.id} playerInfo={playerInfo} onSelected={setCurrentPlayerInfo} />
        )}
      </div>
      <PlayerDetailsModal playerInfo={currentPlayerInfo} onClose={() => setCurrentPlayerInfo(undefined)} />
    </div>
  );
}
