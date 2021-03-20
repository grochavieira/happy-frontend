import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const RememberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  color: ${(props) => props.theme.colors.text};
  margin-top: 3rem;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      margin-right: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
`;
