import styled from "styled-components";

export const CellButton = styled.button`
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;

    :hover {
      filter: none;
    }
  }
`;
