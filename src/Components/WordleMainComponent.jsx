import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import { gameStateAfter_backspacePressed, gameStateAfter_enterPressed, gameStateAfter_letterPressed, initialState } from "../Logic/GameState";

const WordleMainComponent = () => {
  const [gamestate, setGamestate] = useState(initialState());
  const resetGame = () => setGamestate(initialState());
  const letterCallback = (letter)=> setGamestate(gameStateAfter_letterPressed(letter, gamestate))
  const enterCallback = ()=>setGamestate(gameStateAfter_enterPressed(gamestate))
  const backspaceCallback  = ()=> setGamestate(gameStateAfter_backspacePressed(gamestate))
  return (
    <div className="">
      <button  className="border cursor-pointer"><a href="https://www.wikihow.com/Play-Worldle" target="_blank">Help</a></button>
      <button onClick={resetGame} className="border cursor-pointer">
        Reset
      </button>
      {
        gamestate.gameOver && (
            <>
               <span>Word is : {gamestate.randomWord}</span>
            </>
        )
      }
      <GameBoard rows={gamestate.rows} />
      <Keyboard gameOver={gamestate.gameOver} letters={gamestate.letters} letterCallback={letterCallback} enterCallback={enterCallback} backspaceCallback={backspaceCallback}/>
    </div>
  );
};

export default WordleMainComponent;
