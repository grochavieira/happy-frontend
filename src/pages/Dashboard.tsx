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
import Loading from "../components/Loading";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [acceptedOrphanages, setAcceptedOrphanages] = useState<Orphanage[]>([]);
  const [pendingOrphanages, setPendingOrphanages] = useState<Orphanage[]>([]);
  const [showAcceptedOrphanages, setShowAcceptedOrphanages] = useState(true);

  useEffect(() => {
    async function getOrphanages() {
      setLoading(true);
      const { data } = await api.get("/orphanages");
      setAcceptedOrphanages(
        data.filter((orphanage: Orphanage) => orphanage.is_accepted)
      );
      setPendingOrphanages(
        data.filter((orphanage: Orphanage) => !orphanage.is_accepted)
      );
      setLoading(false);
    }

    getOrphanages();
  }, []);

  return (
    <>
      <DashboardSidebar
        showAcceptedOrphanages={showAcceptedOrphanages}
        setShowAcceptedOrphanages={setShowAcceptedOrphanages}
      />
      {loading && <Loading />}
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
