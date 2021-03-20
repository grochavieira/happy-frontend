import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  OrphanagesContainer,
  ImageContainer,
} from "../styles/pages/dashboard";
import DashboardSidebar from "../components/DashboardSidebar";
import OrphanageItem from "../components/OrphanageItem";
import { Orphanage } from "./Orphanage";
import noOrphanagesImg from "../images/no-orphanages.svg";
import api from "../services/api";

export default function Dashboard() {
  const [acceptedOrphanages, setAcceptedOrphanages] = useState<Orphanage[]>([]);
  const [pendingOrphanages, setPendingOrphanages] = useState<Orphanage[]>([]);
  const [showAcceptedOrphanages, setShowAcceptedOrphanages] = useState(true);

  useEffect(() => {
    async function getOrphanages() {
      const { data } = await api.get("/orphanages");
      setAcceptedOrphanages(
        data.filter((orphanage: Orphanage) => orphanage.is_accepted)
      );
      setPendingOrphanages(
        data.filter((orphanage: Orphanage) => !orphanage.is_accepted)
      );
    }

    getOrphanages();
  }, []);

  return (
    <>
      <DashboardSidebar
        showAcceptedOrphanages={showAcceptedOrphanages}
        setShowAcceptedOrphanages={setShowAcceptedOrphanages}
      />
      <Container>
        <Header>
          <h2>
            {showAcceptedOrphanages
              ? "Orfanatos Cadastrados"
              : "Orfanatos Pendentes"}
          </h2>
          <p>
            {showAcceptedOrphanages
              ? `${acceptedOrphanages.length} `
              : `${pendingOrphanages.length} `}
            orfanatos
          </p>
        </Header>
        <OrphanagesContainer>
          {showAcceptedOrphanages &&
            acceptedOrphanages.map((orphanage) => (
              <OrphanageItem
                showAcceptedOrphanages={showAcceptedOrphanages}
                key={orphanage.id}
                orphanage={orphanage}
              />
            ))}

          {!showAcceptedOrphanages &&
            pendingOrphanages.map((orphanage) => (
              <OrphanageItem
                showAcceptedOrphanages={showAcceptedOrphanages}
                key={orphanage.id}
                orphanage={orphanage}
              />
            ))}
        </OrphanagesContainer>
        {showAcceptedOrphanages && acceptedOrphanages.length === 0 ? (
          <ImageContainer>
            <img src={noOrphanagesImg} alt="no-orphanages" />
          </ImageContainer>
        ) : (
          ""
        )}
        {!showAcceptedOrphanages && pendingOrphanages.length === 0 ? (
          <ImageContainer>
            <img src={noOrphanagesImg} alt="no-orphanages" />
          </ImageContainer>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
