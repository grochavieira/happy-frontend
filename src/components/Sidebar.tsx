import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";

import { Container, Footer } from "../styles/components/sidebar";

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Container>
  );
}
