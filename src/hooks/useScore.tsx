import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { GameState } from '../domain/GameState';

interface ScoreProviderProps {
  children: ReactNode;
}

interface ScoreContextData {
  playerOneScore: number,
  playerTwoScore: number,
  setScore: (winner: GameState) => void;
}

const ScoreContext = createContext<ScoreContextData>(
  {} as ScoreContextData
);

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);

  const setScore = useCallback((winner: GameState) => {
    if (winner === GameState.PlayerOne) setPlayerOneScore(playerOneScore + 1);
    if (winner === GameState.PlayerTwo) setPlayerTwoScore(playerTwoScore + 1);
  }, [playerOneScore, playerTwoScore]);

  return (
    <ScoreContext.Provider value={{ playerOneScore, playerTwoScore, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);

  return context;
}
