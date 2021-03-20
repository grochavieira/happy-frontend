import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.primary} 50%,
    ${(props) => props.theme.colors.primaryLight} 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 4.8rem;
  }

  a,
  button {
    width: 4.8rem;
    height: 4.8rem;

    border: 0;

    background: ${(props) => props.theme.colors.primaryLight};
    border-radius: 1.6rem;

    cursor: pointer;

    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &.highlight {
      background-color: ${(props) => props.theme.colors.secondary};
    }

    &.highlight svg {
      color: ${(props) => props.theme.colors.primaryDark};
    }
  }

  a:hover,
  button:hover {
    filter: brightness(0.8);
  }

  svg {
    color: #fff;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  button + button {
    margin-top: 1.5rem;
  }
`;

export const Footer = styled.footer``;
