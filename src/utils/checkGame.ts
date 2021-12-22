import { CellValues } from "../domain";
import { GameState } from "../domain/GameState";

function checkLine(lineNumber: number, cells: (CellValues | undefined)[]): boolean {
  const startCell = lineNumber * 3;

  if (cells[startCell] && cells[startCell] === cells[startCell + 1] && cells[startCell] === cells[startCell + 2]) {
    return true;
  }

  return false;
}

function checkColumn(columnNumber: number, cells: (CellValues | undefined)[]): boolean {
  const startCell = columnNumber * 3;

  if (cells[startCell] && cells[startCell] === cells[startCell + 3] && cells[startCell] === cells[startCell + 6]) {
    return true;
  }

  return false;
}

function checkDiagonal(diagonalNumber: number, cells: (CellValues | undefined)[]): boolean {
  const startCell = diagonalNumber * 2;

  if (cells[startCell] && cells[startCell] === cells[startCell + 4] && cells[startCell] === cells[startCell + 8]) {
    return true;
  }

  return false;
}

function checkDraw(cells: (CellValues | undefined)[]): boolean {
  for(const cell of cells) {
    if (cell === undefined) {
      return false;
    } 
  }

  return true;
}

function checkWinner(startCell: CellValues | undefined) {
  return startCell === CellValues.Circle ? GameState.PlayerOne : GameState.PlayerTwo;
}

export function checkGame(cells: (CellValues | undefined)[]): GameState | undefined {
  if(checkLine(0, cells)) return checkWinner(cells[0]);
  if(checkLine(1, cells)) return checkWinner(cells[3]);
  if(checkLine(2, cells)) return checkWinner(cells[6]);
  if(checkColumn(0, cells)) return checkWinner(cells[0]);
  if(checkColumn(1, cells)) return checkWinner(cells[1]);
  if(checkColumn(2, cells)) return checkWinner(cells[2]);
  if(checkDiagonal(0, cells)) return checkWinner(cells[0]);
  if(checkDiagonal(1, cells)) return checkWinner(cells[2]);

  if(checkDraw(cells)) return GameState.Draw;

  return;
}
