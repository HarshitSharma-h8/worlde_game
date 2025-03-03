import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import {
  gameStateAfter_backspacePressed,
  gameStateAfter_enterPressed,
  gameStateAfter_letterPressed,
  initialState,
} from "../Logic/GameState";

const WordleMainComponent = () => {
  const [gamestate, setGamestate] = useState(initialState());
  const resetGame = () => setGamestate(initialState());
  const letterCallback = (letter) =>
    setGamestate(gameStateAfter_letterPressed(letter, gamestate));
  const enterCallback = () =>
    setGamestate(gameStateAfter_enterPressed(gamestate));
  const backspaceCallback = () =>
    setGamestate(gameStateAfter_backspacePressed(gamestate));
  return (
    <>
      <div >
        <div className="flex items-center justify-between px-[50px] sm:px-[150px] py-2">
          <div>
            {gamestate.gameOver && (
              <>
                <span className="text-dark dark:text-white">
                  Word is :{" "}
                  <span className="bg-gray-600 text-white px-2 py-1 rounded-md">
                    {gamestate.randomWord}
                  </span>
                </span>
              </>
            )}
          </div>
          <button
            onClick={resetGame}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Reset
          </button>
        </div>
        <GameBoard rows={gamestate.rows} />
        <Keyboard
          gameOver={gamestate.gameOver}
          letters={gamestate.letters}
          letterCallback={letterCallback}
          enterCallback={enterCallback}
          backspaceCallback={backspaceCallback}
        />
      </div>
    </>
  );
};

export default WordleMainComponent;
