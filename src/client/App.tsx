import * as React from "react";
import * as Types from "../../Types";
import GameContainer from "./GameComponents/GameContainer";
import LoginPage from "./Login";
import NewUser from "./NewUser";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Lobby from "./Lobby";
import { saveState } from "./Redux/store";
import { useSelector } from "react-redux";
import { gainXP, resetXP } from "./Redux/Slices/Experience";
import { addCoinsToWallet } from "./Redux/Slices/Wallet";

const App = (props: Types.AppProps) => {
  const nav = useNavigate();

  const ALLSTATE = useSelector((state: Types.AllState) => state);

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [showLobbyButton, setShowLobbyButton] = useState<boolean>(false);

  const handleLogOut = async () => {
    let checkPointData: Types.AllState = { ...ALLSTATE };

    console.log({ checkPointData });
    try {
      //@ saveState calls a PUT req to the db to update player data
      await saveState(checkPointData);
      console.log(`successfully saved`);
    } catch (error) {
      console.log(error);
    }

    console.log(`logging out`);
    setLoggedIn(!loggedIn);
    setShowLobbyButton(false);
    nav(`/`);
  };

  const handleMoveToLobby = () => {
    // move the player to the game
    nav(`/lobby`);
    // toggle state for the lobby button
    setShowLobbyButton(false);
  };
  /**
   * This function displays buttons to update state outside the bounds of the game for testing purposes.
   * @returns Returns JSX for buttons
   */
  const ADMINBUTTONS = () => {
    let skillsarray = [
      `Attack`,
      `Strength`,
      `Defence`,
      `Constitution`,
      `Prayer`,
      `Summoning`,
      `Ranged`,
      `Magic`,
      `Crafting`,
      `Mining`,
      `Smithing`,
      `Fishing`,
      `Cooking`,
      `Firemaking`,
      `Woodcutting`,
      `Runecrafting`,
      `Dungeoneering`,
      `Fletching`,
      `Agility`,
      `Herblore`,
      `Thieving`,
      `Slayer`,
      `Farming`,
      `Construction`,
      `Hunter`,
      `Divination`,
      `Invention`,
      `Archaeology`,
    ];
    return (
      <div>
        <div className="d-flex">
          <button
            onClick={() => {
              skillsarray.forEach((skill) => dispatch(gainXP({ skill, xp: 199999999 })));
            }}
          >
            max xp
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(gainXP({ skill: `Strength`, xp: 199999999 }));
              dispatch(gainXP({ skill: `Attack`, xp: 199999999 }));
              dispatch(gainXP({ skill: `Defence`, xp: 199999999 }));
            }}
          >
            max atk str def
          </button>
        </div>
        <div>
          <button onClick={() => dispatch(resetXP())}>reset skills</button>
        </div>
        <div>
          <button onClick={() => dispatch(addCoinsToWallet(200000000))}>200M coins</button>
        </div>
      </div>
    );
  };

  return (
    <main className="container-fluid px-5 mt-3">
      <div className="text-center">IdleScape</div>
      {/* {ADMINBUTTONS()} */}
      {loggedIn && (
        <div className="d-flex justify-content-end mb-1">
          {showLobbyButton && (
            <button onClick={() => handleMoveToLobby()} className="btn btn-primary">
              Lobby
            </button>
          )}

          <button onClick={() => handleLogOut()} className="btn btn-primary">
            Log Out
          </button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
        <Route path="/lobby" element={<Lobby setShowLobbyButton={setShowLobbyButton} />} />
        <Route path="/game" element={<GameContainer setShowLobbyButton={setShowLobbyButton} />} />
        <Route path="/register" element={<NewUser setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
      </Routes>
    </main>
  );
};

export default App;
function dispatch(arg0: any): void {
  throw new Error("Function not implemented.");
}
