import { getRandomWord } from "./Words";

const rowsNum = 6;
const colsNum = 5;
const CELL_STATE = {
    default : {
        cellClassName  : 'bg-black dark:bg-white',
        keyboardClassName: 'bg-gray-200'
    },
    correctLetter : {
        cellClassName  : 'bg-yellow-400',
        keyboardClassName: 'bg-yellow-400'
    },
    incorrectLetter : {
        cellClassName  : 'bg-gray-400',
        keyboardClassName  : 'bg-gray-400',
    },
    correctPos : {
        cellClassName  : 'bg-green-400',
        keyboardClassName  : 'bg-green-400',
    },
}

function initialCellState(){
    return {
        letter : null,
        state : CELL_STATE.default
    };
}

export const initialState = ()=>{
    return {
       rows : Array(rowsNum).fill(Array(colsNum).fill(initialCellState())),
       letters : Array(26).fill(CELL_STATE.default),
       gameOver : false,
       randomWord : getRandomWord(),
       currentRow : 0,
       currentCol : 0,
    };
}

export function gameStateAfter_letterPressed(letter, gameState) {
    if(gameState.gameOver || gameState.currentCol == colsNum){
        return gameState;
    }
    const newRows = JSON.parse(JSON.stringify(gameState.rows))
    newRows[gameState.currentRow][gameState.currentCol] = {
        ...newRows[gameState.currentRow][gameState.currentCol],
        letter : letter
    }
    return {
        ...gameState,
        rows : newRows,
        currentCol : gameState.currentCol+1,
    }
}
export function gameStateAfter_enterPressed( gameState) {
    return gameState
}
export function gameStateAfter_backspacePressed(gameState) {
    return gameState
}

export function getIndexOfLetter(letter){
    return letter.charCodeAt(0)- 'A'.charCodeAt(0);
}