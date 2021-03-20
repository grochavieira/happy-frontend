import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  p {
    color: ${(props) => props.theme.colors.text};
    margin-top: -2rem;
    margin-bottom: 3rem;
  }

  button {
    margin-top: 2.5rem;
  }
`;
