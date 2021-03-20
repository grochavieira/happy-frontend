import React, { useContext, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { ThemeContext } from "styled-components";
import { useParams } from "react-router-dom";
import mapIcon from "../utils/mapIcon";
import {
  Container,
  Details,
  Images,
  ImageButton,
  OpenDetails,
  ContactButton,
  OrphanageDetails,
} from "../styles/pages/orphanage";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  whatsapp: string;
  is_accepted: boolean;
  images: Array<{
    url: string;
    id: number;
  }>;
}

export interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const { title } = useContext(ThemeContext);
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function loadOrphanage() {
      const { data } = await api.get(`/orphanages/${params.id}`);
      setOrphanage(data);
    }
    loadOrphanage();
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }
  return (
    <Container>
      <Sidebar />

      <main>
        <Details>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => {
              return (
                <ImageButton
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                  key={image.id}
                  className={activeImageIndex === index ? "active" : ""}
                  type="button"
                >
                  <img src={image.url} alt={orphanage.name} />
                </ImageButton>
              );
            })}
          </Images>

          <OrphanageDetails>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends not-open">
                  <FiInfo size={32} />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </OpenDetails>

            <ContactButton
              target="blank"
              href={`https://api.WhatsApp.com/send?phone=${orphanage.whatsapp}`}
              className="contact-button"
            >
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetails>
        </Details>
      </main>
    </Container>
  );
}
