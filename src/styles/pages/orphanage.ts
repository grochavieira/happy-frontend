import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export const Details = styled.div`
  width: 70rem;
  margin: 6.4rem auto;

  background: ${(props) => props.theme.colors.formBackground};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 2rem;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1.6rem;

  margin: 1.6rem 4rem 0;
`;

export const ImageButton = styled.button`
  border: 0;
  height: 8.8rem;
  background: none;
  cursor: pointer;
  border-radius: 2rem;
  overflow: hidden;
  outline: none;

  opacity: 0.6;

  &.active {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 8.8rem;
    object-fit: cover;
  }
`;

export const OrphanageDetails = styled.div`
  padding: 8rem;

  h1 {
    color: ${(props) => props.theme.colors.title};
    font-size: 5.4rem;
    line-height: 5.4rem;
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 2.8rem;
    color: ${(props) => props.theme.colors.text};
    margin-top: 2.4rem;
  }

  .leaflet-container {
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 2rem;
    overflow: hidden;
  }

  .map-container {
    margin-top: 6.4rem;
    background: ${(props) => `${props.theme.colors.tertiaryLight}1A`};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 2rem;
    overflow: hidden;

    footer {
      padding: 2rem 0;
      text-align: center;

      a {
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.tertiaryLight};
        text-decoration: none;
      }
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: ${(props) => props.theme.colors.borderColor};
    margin: 6.4rem 0;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: ${(props) => props.theme.colors.title};
  }
`;

export const OpenDetails = styled.div`
  margin-top: 2.4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  div {
    padding: 3.2rem 2.4rem;
    border-radius: 2rem;
    line-height: 2.8rem;

    svg {
      display: block;
      margin-bottom: 2rem;
    }
  }

  div.hour {
    background: ${(props) =>
      props.theme.title === "light"
        ? "linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%)"
        : "linear-gradient(149.97deg, #4f2c18 8.13%, #4f2c1840 92.67%)"};
    border: 1px solid ${(props) => `${props.theme.colors.primary}40`};
    color: ${(props) => props.theme.colors.text};

    svg {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  div.open-on-weekends {
    background: ${(props) =>
      props.theme.title === "light"
        ? "linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%)"
        : "linear-gradient(154.16deg, #5843e81A 7.85%, #5843e840 91.03%)"};
    border: 1px solid ${(props) => `${props.theme.colors.tertiary}40`};
    color: ${(props) => props.theme.colors.tertiary};

    svg {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }

  div.not-open {
    background: ${(props) =>
      props.theme.title === "light"
        ? "linear-gradient(154.16deg, #fdf8f5 7.85%, #ffffff 91.03%)"
        : "linear-gradient(154.16deg, #ff669d1A 7.85%, #ff669d40 91.03%)"};
    border: 1px solid
      ${(props) => (props.theme.title === "light" ? "#ffbcd4" : "#333")};
    color: #ff669d;

    svg {
      color: #ff669d;
    }
  }
`;

export const ContactButton = styled.a`
  text-decoration: none;
  margin-top: 6.4rem;

  width: 100%;
  height: 6.4rem;
  border: 0;
  cursor: pointer;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 2rem;
  color: #fff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 1.6rem;
  }

  :hover {
    background: ${(props) => props.theme.colors.tertiaryDark};
  }
`;
