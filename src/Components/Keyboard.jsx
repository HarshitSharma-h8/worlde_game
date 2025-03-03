import React from "react";
import { getIndexOfLetter } from "../Logic/GameState";

const Keyboard = ({
  gameOver,
  letters,
  letterCallback,
  enterCallback,
  backspaceCallback,
}) => {
  const keyArrangement = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (
    <>
      {keyArrangement.map((row, rowInd) => (
        <div key={"rowInd_" + rowInd}>
          {row.map((letter, colInd) => (
            <button
              key={"colInd_" + colInd}
              disabled={gameOver}
              className={`${
                letters[getIndexOfLetter(letter)].keyboardClassName
              }  w-[50px] h-[50px] m-1 rounded-sm transition ease-in-out duration-200 cursor-pointer hover:scale-105 `}
              onClick={() => letterCallback(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
      <div className="">
        <button onClick={enterCallback} disabled={gameOver} className={` h-[50px] m-1 rounded-sm transition ease-in-out duration-200 cursor-pointer hover:scale-105 bg-gray-200 px-3`}>
          ENTER
        </button>
        <button onClick={backspaceCallback} disabled={gameOver} className={` h-[50px] m-1 rounded-sm transition ease-in-out duration-200 cursor-pointer hover:scale-105 bg-gray-200 px-3`}>
          BACKSPACE
        </button>
      </div>
    </>
  );
};

export default Keyboard;
