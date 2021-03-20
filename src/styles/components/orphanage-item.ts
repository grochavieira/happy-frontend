import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  background: ${(props) => `${props.theme.colors.formBackground}`};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 2rem;
  overflow: hidden;

  .leaflet-container {
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 2rem;
    overflow: hidden;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;
  color: ${(props) => props.theme.colors.text};

  padding: 1.5rem 0;
  text-align: center;

  strong {
    font-size: 2rem;
  }

  div {
    display: flex;
    flex-direction: row;

    margin-left: 2rem;

    a {
      display: flex;
      justify-content: center;
      border: 0;
      padding: 1.2rem;
      border-radius: 13px;
      background-color: ${(props) => props.theme.colors.background};

      svg {
        color: ${(props) => props.theme.colors.green};
      }

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    a + a {
      margin-left: 1rem;
    }
  }
`;
