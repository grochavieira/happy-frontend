import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem 10rem 20rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.text};
`;

export const OrphanagesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5rem;
  display: grid;
  grid-gap: 3rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30rem;
  }
`;
