import React from "react";

const GameBoard = ({rows}) => {
  return (
    <>
      {
        rows.map((row , rowIndex )=>(
          <div key={'row_'+ rowIndex} className="">
            {
              row.map((cell, cellIndex)=>(
                <button 
                key={'cell_'+ cellIndex}
                disabled={true}
                className={`${cell.state.cellClassName}   w-[50px] h-[50px] m-1 rounded-sm`}
                >
                  <strong className="text-white dark:text-black">{cell.letter || "_"}</strong>
                </button>
              ))
            }
          </div>
        ))
      }
    </>
  );
};

export default GameBoard;
