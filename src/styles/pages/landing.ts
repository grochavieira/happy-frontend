import styled from "styled-components";

import landingImg from "../../images/landing.svg";
import landingImgDark from "../../images/landing-dark.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primaryLight} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 110rem;

  height: 100%;
  max-height: 68rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: ${(props) =>
      props.theme.title === "dark"
        ? `url(${landingImgDark}) no-repeat 80%`
        : `url(${landingImg}) no-repeat 80%`}
    center;
`;

export const Main = styled.main`
  max-width: 35rem;

  h1 {
    font-size: 7.6rem;
    font-weight: 900;
    line-height: 7rem;
  }

  p {
    margin-top: 4rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  text-align: right;

  strong {
    margin-top: 0.5rem;
    font-weight: 800;
  }

  svg {
    cursor: pointer;
  }
`;

export const RegisterButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem 6rem;
  background: ${(props) => props.theme.colors.green};
  border-radius: 3rem;

  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Enter = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 8rem;
  height: 8rem;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) =>
      props.theme.title === "dark" ? `#fff` : " #96feff"};
  }
`;
