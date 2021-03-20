import React from "react";
import { Container } from "../styles/components/panel";

import logoImg from "../images/panel_logo.svg";

export default function Panel() {
  return (
    <>
      <Container>
        <img src={logoImg} alt="Happy" />
        <strong>São Paulo</strong>
        <span>São Bernardo do Campo</span>
      </Container>
    </>
  );
}
