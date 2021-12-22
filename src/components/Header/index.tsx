import { useScore } from "../../hooks/useScore";
import { HeaderWrapper } from "./styled";

export function Header() {
  const { playerOneScore, playerTwoScore } = useScore();
  
  return (
    <HeaderWrapper>
      <div>Player 1 - {playerOneScore}</div>
      <div>{playerTwoScore} - Player 2</div>
    </HeaderWrapper>
  );
};
