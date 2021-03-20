import React, { useContext } from "react";
import { FiArrowRight, FiSun, FiMoon } from "react-icons/fi";
import {
  Container,
  Content,
  Main,
  Location,
  Enter,
  RegisterButton,
} from "../styles/pages/landing";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";

import logoImg from "../images/logo.svg";
import AuthContext from "../contexts/auth";

interface Props {
  toggleTheme: () => void;
}

const Landing: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />
        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          <Link to="/login">
            <RegisterButton>Acesso Restrito</RegisterButton>
          </Link>
        </Main>
        <Location>
          {title === "light" ? (
            <FiSun color="#FFD666" onClick={() => toggleTheme()} size={30} />
          ) : (
            <FiMoon color="#00C7C7" onClick={() => toggleTheme()} size={30} />
          )}
          <strong>São Paulo</strong>
          <span>São Bernardo do Campo</span>
        </Location>

        <Link to="/app">
          <Enter>
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />{" "}
          </Enter>
        </Link>
      </Content>
    </Container>
  );
};

export default Landing;
