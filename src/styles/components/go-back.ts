import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 4rem;
  right: 5rem;

  border: 0;
  border-radius: 15px;
  padding: 1.5rem;

  color: ${(props) => props.theme.colors.green};
  background-color: rgba(0, 0, 0, 0.05);

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
