import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import { initialState } from "../Logic/GameState";

const WordleMainComponent = () => {
  const [gamestate, setGamestate] = useState(initialState());
  const resetGame = () => setGamestate(initialState());
  const letterCallback = (letter)=>{}
  return (
    <div className="">
      <button  className="border cursor-pointer"><a href="https://www.wikihow.com/Play-Worldle" target="_blank">Help</a></button>
      <button onClick={resetGame} className="border cursor-pointer">
        Reset
      </button>
      <GameBoard rows={gamestate.rows} />
      <Keyboard gameOver={gamestate.gameOver} letters={gamestate.letters} letterCallback={letterCallback}/>
    </div>
  );
};

export default WordleMainComponent;
