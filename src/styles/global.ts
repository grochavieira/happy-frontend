import "react-toastify/dist/ReactToastify.css";
import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 55.5%;
    }

    body {
        color: ${(props) => props.theme.colors.gradientText};
        background-color: ${(props) => props.theme.colors.background};
    }

    body, input, button, textarea {
        font: 600 1.8rem Nunito, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .Toastify__toast {
      border-radius: 10px;
    }

    .Toastify__toast--error {
      background-color: #ff3366;
    }
    .Toastify__toast--success {
      background-color: rgb(0, 149, 247);
    }
    .Toastify__toast--warning {
      background-color: ${(props) => props.theme.colors.secondary}
    }
`;

export const InputBlock = styled.div`
  label {
    display: flex;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 0.8rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.title};
      margin-left: 2.4rem;
      line-height: 2.4rem;
    }
  }

  input,
  textarea {
    width: 100%;
    background: ${(props) => props.theme.colors.inputBackground};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 2rem;
    outline: none;
    color: ${(props) => props.theme.colors.title};
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  textarea {
    min-height: 12rem;
    max-height: 24rem;
    resize: vertical;
    padding: 1.6rem;
    line-height: 2.8rem;
  }

  .new-image {
    height: 9.6rem;
    background: ${(props) => props.theme.colors.inputBackground};
    border: 1px dashed ${(props) => props.theme.colors.tertiaryLight};
    border-radius: 2rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${(props) => props.theme.colors.tertiaryLight};
    }
  }

  input[type="file"] {
    visibility: hidden;
    opacity: 0;
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 4.4rem;

  width: 100%;
  height: 6.4rem;
  border: 0;
  cursor: pointer;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 2rem;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  svg {
    margin-right: 1.6rem;
  }

  :hover {
    background: ${(props) => props.theme.colors.tertiaryDark};
  }

  :active {
    transform: scale(0.9);
  }
`;

export const InputPasswordBlock = styled.div`
  label {
    display: flex;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 0.8rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.title};
      margin-left: 2.4rem;
      line-height: 2.4rem;
    }
  }

  div {
    position: relative;
    display: flex;
  }

  div input {
    width: 100%;

    background: ${(props) => props.theme.colors.inputBackground};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 2rem;
    outline: none;
    color: ${(props) => props.theme.colors.title};
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  svg {
    position: absolute;
    top: 33%;
    right: 2rem;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;

export const Fieldset = styled.div`
  legend {
    font-size: 3.2rem;
    line-height: 3.4rem;
    color: ${(props) => props.theme.colors.title};
    font-weight: 700;

    margin-bottom: 1.5rem;
    padding-bottom: 2.4rem;
  }
`;

export const Form = styled.div`
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 8rem;

  strong.register {
    display: flex;
    align-self: center;

    margin-top: 3rem;
    font-size: 2rem;

    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
