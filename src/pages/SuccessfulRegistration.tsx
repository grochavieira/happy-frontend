import React from "react";
import { useHistory } from "react-router";
import {
  Container,
  Content,
  Main,
} from "../styles/pages/successful-registration";

import doneImg from "../images/done-registration.svg";

export default function SuccessfulRegistration() {
  const history = useHistory();
  return (
    <>
      <Container>
        <Main>
          <h1>Ebaaa!</h1>
          <p>
            O cadastro deu certo e foi enviado <br /> ao administrador para ser
            aprovado. <br /> Agora é só esperar :)
          </p>

          <button
            onClick={() => {
              history.push("/app");
            }}
          >
            Voltar para o mapa
          </button>
        </Main>
        <Content>
          <img src={doneImg} alt="done" />
        </Content>
      </Container>
    </>
  );
}
