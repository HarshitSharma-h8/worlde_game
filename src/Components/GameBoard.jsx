import React from "react";

const GameBoard = ({rows}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
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
                  <strong className="text-white ">{cell.letter || "_"}</strong>
                </button>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default GameBoard;
