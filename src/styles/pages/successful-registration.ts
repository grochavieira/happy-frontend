import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0rem 15rem;

  background-color: #37c77f;

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

  button {
    border: 0;
    background-color: #31b272;
    border-radius: 15px;
    padding: 2rem 4rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #3bd689;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
