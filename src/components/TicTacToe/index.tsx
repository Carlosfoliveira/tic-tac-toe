import { useCallback, useEffect, useMemo, useState } from "react";
import { CellValues } from "../../domain";
import { GameState } from "../../domain/GameState";
import { useScore } from "../../hooks/useScore";
import { checkGame } from "../../utils/checkGame";
import { Cell } from "../Cell";

import { Results, TicTacToeWrapper } from "./styled";

export function TicTacToe() {
  const { setScore } = useScore();
  const [gameState, setGameState] = useState<GameState | undefined>(undefined);
  const [turn, setTurn] = useState<CellValues>(CellValues.Circle);
  const [cells, setCells] = useState<(CellValues | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  useEffect(() => {
    const gameHasFinished = checkGame(cells);
    if (gameHasFinished) {
      setGameState(gameHasFinished);
      setScore(gameHasFinished);
    }
  }, [cells]);

  const handleCellClick = useCallback((index: number) => {
    const newTurn = turn === CellValues.Circle ? CellValues.Cross : CellValues.Circle;
    const newCells = [...cells];
    newCells[index] = turn;
    setCells(newCells);
    setTurn(newTurn);
  }, [turn, setTurn, cells, setCells]);

  const handleResetClick = useCallback(() => {
    setGameState(undefined);
    setTurn(CellValues.Circle);
    setCells([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  }, [setGameState, setTurn, setCells]);
  
  const result = useMemo(() => {
    if(gameState === GameState.PlayerOne) return 'Player 1 Won the game';
    if(gameState === GameState.PlayerTwo) return 'Player 2 Won the game';
    if(gameState === GameState.Draw) return 'The game was a Draw';
  }, [gameState]);

  return(
    <>
      <Results>
        {gameState && (
          <>
            <span>{result}</span>  
            <button type='button' onClick={handleResetClick}>Reset the game</button>
          </>
        )}
      </Results>
      <TicTacToeWrapper>
        {cells.map((cellValue, index) => (
          <Cell
            key={index}
            index={index}
            value={cellValue}
            onClick={handleCellClick}
            disabled={!!gameState}
            />
          )
        )}
      </TicTacToeWrapper>
    </>
  );
}
