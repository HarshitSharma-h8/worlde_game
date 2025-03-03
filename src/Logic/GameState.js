import { getRandomWord } from "./Words";

const rowsNum = 6;
const colsNum = 5;
const CELL_STATE = {
  default: {
    value: 0,
    cellClassName: "bg-black dark:bg-gray-600",
    keyboardClassName: "bg-gray-200",
  },
  correctLetter: {
    value: 1,
    cellClassName: "bg-yellow-400",
    keyboardClassName: "bg-yellow-400",
  },
  incorrectLetter: {
    value: 2,
    cellClassName: "bg-gray-400",
    keyboardClassName: "bg-gray-400",
  },
  correctPos: {
    value: 3,
    cellClassName: "bg-green-400",
    keyboardClassName: "bg-green-400",
  },
};

function initialCellState() {
  return {
    letter: null,
    state: CELL_STATE.default,
  };
}

export const initialState = () => {
  return {
    rows: Array(rowsNum).fill(Array(colsNum).fill(initialCellState())),
    letters: Array(26).fill(CELL_STATE.default),
    gameOver: false,
    randomWord: getRandomWord(),
    currentRow: 0,
    currentCol: 0,
  };
};

export function gameStateAfter_letterPressed(letter, gameState) {
  if (gameState.gameOver || gameState.currentCol == colsNum) {
    return gameState;
  }
  const newRows = JSON.parse(JSON.stringify(gameState.rows));
  newRows[gameState.currentRow][gameState.currentCol] = {
    ...newRows[gameState.currentRow][gameState.currentCol],
    letter: letter,
  };
  return {
    ...gameState,
    rows: newRows,
    currentCol: gameState.currentCol + 1,
  };
}
export function gameStateAfter_enterPressed(gameState) {
  if (gameState.gameOver || gameState.currentCol !== colsNum) {
    return gameState;
  }
  const newRows = JSON.parse(JSON.stringify(gameState.rows));
  const newLetters = JSON.parse(JSON.stringify(gameState.letters));

  let allCorrect = true;
  const currRowArr = newRows[gameState.currentRow];

  for (var i = 0; i < colsNum; i++) {
    if (gameState.randomWord.charAt(i) === currRowArr[i].letter) {
      currRowArr[i].state = CELL_STATE.correctPos;
    } else if (gameState.randomWord.indexOf(currRowArr[i].letter) !== -1) {
      currRowArr[i].state = CELL_STATE.correctLetter;
      allCorrect = false;
    } else {
      currRowArr[i].state = CELL_STATE.incorrectLetter;
      allCorrect = false;
    }

    if (
      currRowArr[i].state.value >
      newLetters[getIndexOfLetter(currRowArr[i].letter)].value
    ) {
      newLetters[getIndexOfLetter(currRowArr[i].letter)] = currRowArr[i].state;
    }
  }

  return {
    ...gameState,
    rows: newRows,
    letters: newLetters,
    currentRow: gameState.currentRow + 1,
    currentCol: 0,
    gameOver: allCorrect || gameState.currentRow === rowsNum - 1,
  };
}
export function gameStateAfter_backspacePressed(gameState) {
  if (gameState.gameOver || gameState.currentCol === 0) {
    return gameState;
  }
  const newRows = JSON.parse(JSON.stringify(gameState.rows));
  newRows[gameState.currentRow][gameState.currentCol - 1] = initialCellState();
  return {
    ...gameState,
    rows: newRows,
    currentCol: gameState.currentCol - 1,
  };
}

export function getIndexOfLetter(letter) {
  return letter.charCodeAt(0) - "A".charCodeAt(0);
}
