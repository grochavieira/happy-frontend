import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0rem 15rem;

  background-color: #ff669d;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 8rem;
  }

  p {
    text-align: center;
    font-size: 2.5rem;
    margin: 2rem;
    font-weight: 100;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      width: 100%;
      max-width: 24rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 0;
      background-color: #d6487b;
      border-radius: 15px;
      padding: 2rem 4rem;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: #ff487b;
      }

      &:active {
        transform: scale(0.9);
      }

      & + button {
        margin-left: 2rem;
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;
