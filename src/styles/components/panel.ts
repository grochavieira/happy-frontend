import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-right: 3px solid ${(props) => props.theme.colors.text};

  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primaryLight} 100%
  );

  font-size: 2rem;

  strong {
    margin-top: 5rem;
  }
`;
