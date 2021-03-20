import React, { useContext } from "react";
import { FiMapPin, FiInfo } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";

import {
  Container,
  Main,
  Footer,
} from "../styles/components/dashboard-sidebar";
import { toast } from "react-toastify";
import AuthContext from "../contexts/auth";

interface DashboardSidebarProps {
  showAcceptedOrphanages: boolean;
  setShowAcceptedOrphanages: (value: boolean) => void;
}

export default function DashboardSidebar({
  showAcceptedOrphanages,
  setShowAcceptedOrphanages,
}: DashboardSidebarProps) {
  const { signOut } = useContext(AuthContext);
  const history = useHistory();

  function handleLogout() {
    signOut();
    toast.success("Logout do sistema com sucesso!");
    history.push("/");
  }

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />

      <Main>
        <button
          onClick={() => setShowAcceptedOrphanages(true)}
          className={showAcceptedOrphanages ? "highlight" : ""}
          type="button"
        >
          <FiMapPin size={24} />
        </button>
        <button
          className={!showAcceptedOrphanages ? "highlight" : ""}
          onClick={() => setShowAcceptedOrphanages(false)}
          type="button"
        >
          <FiInfo size={24} />
        </button>
      </Main>

      <Footer>
        <button type="button" onClick={handleLogout}>
          <AiOutlinePoweroff size={24} color="#FFF" />
        </button>
      </Footer>
    </Container>
  );
}
