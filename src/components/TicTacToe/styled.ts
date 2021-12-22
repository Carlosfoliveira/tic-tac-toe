import styled from "styled-components";

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  span {
    margin-bottom: 1rem;
  }

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TicTacToeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  grid-template-rows: repeat(3, 10rem);
  gap: 1rem;
  background-color: #000;
`;
