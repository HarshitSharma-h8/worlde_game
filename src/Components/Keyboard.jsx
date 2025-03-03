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
        <div key={"rowInd_" + rowInd} className=" flex justify-center items-center">
          {row.map((letter, colInd) => (
            <button
              key={"colInd_" + colInd}
              disabled={gameOver}
              className={`${
                letters[getIndexOfLetter(letter)].keyboardClassName
              } w-[30px] h-[30px]  sm:w-[50px] sm:h-[50px] m-1 rounded-sm transition ease-in-out duration-200 cursor-pointer hover:scale-105 `}
              onClick={() => letterCallback(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center items-center">
        <button onClick={enterCallback} disabled={gameOver} className={`  h-[30px]   sm:h-[50px] m-1 rounded-sm transition ease-in-out duration-200 cursor-pointer hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white px-3`}>
          ENTER
        </button>
        <button onClick={backspaceCallback} disabled={gameOver} className={`  h-[30px]   sm:h-[50px] m-1 rounded-sm transition ease-in-out duration-200 cursor-pointer hover:scale-105 bg-gray-200 px-3`}>
          BACKSPACE
        </button>
      </div>
    </>
  );
};

export default Keyboard;
