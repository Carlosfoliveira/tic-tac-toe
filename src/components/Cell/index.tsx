import { CellButton } from "./styled";
import { CellValues } from "../../domain";

import crossIcon from '../../assets/cross.png';
import circleIcon from '../../assets/circle.png';

interface CellProps {
  index: number;
  onClick: (index: number) => void;
  value?: CellValues;
  disabled?: boolean;
}

export function Cell(props: CellProps) {
  const { index, value, onClick, disabled } = props;

  return (
    <CellButton onClick={() => onClick(index)} disabled={disabled || !!value} >
      {value === CellValues.Circle && <img  src={circleIcon} alt="circle" width="70px" />}
      {value === CellValues.Cross && <img  src={crossIcon} alt="cross" width="70px" />}
    </CellButton>
  );
}
