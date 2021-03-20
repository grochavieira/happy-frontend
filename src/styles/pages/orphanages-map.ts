import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
    margin: 0.8rem 1.2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 4.8rem;
    height: 4.8rem;
    background: ${(props) => props.theme.colors.primary};
    /* box-shadow: 1.7rem 2.7rem 4.1rem rgba(23, 142, 166, 0.16); */
    border-radius: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.gradientText};
    }
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;

export const Aside = styled.aside`
  width: 44rem;
  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primaryLight} 100%
  );
  padding: 8rem 8rem 4rem 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    margin-top: -5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 5rem;
    border: 0;

    padding: 1.5rem;
    border-radius: 15px;

    color: ${(props) => props.theme.colors.gradientText};
    background-color: ${(props) => props.theme.colors.primaryDark};

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Header = styled.header`
  h2 {
    font-size: 4rem;
    font-weight: 80rem;
    line-height: 4.2rem;
    margin-top: 6.4rem;
  }

  p {
    line-height: 2.8rem;
    margin-top: 2.4rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 2.4rem;

  margin-top: 5rem;

  strong {
    font-weight: 800;
  }
`;

export const CreateOrphanage = styled.a`
  position: absolute;

  right: 4rem;
  bottom: 4rem;

  width: 6.4rem;
  height: 6.4rem;
  background: ${(props) => props.theme.colors.primaryLight};
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }
`;
