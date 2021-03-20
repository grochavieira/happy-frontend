import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPlus, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Container,
  Aside,
  Header,
  Footer,
  CreateOrphanage,
} from "../styles/pages/orphanages-map";
import { ThemeContext } from "styled-components";

import mapMarkerImg from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  name: string;
  latitude: number;
  longitude: number;
  id: number;
}

function OrphanagesMap() {
  const history = useHistory();
  const { title } = useContext(ThemeContext);
  const [userLocation, setUserLocation] = useState({
    latitude: -20.7104846,
    longitude: -46.5521557,
  });
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  useEffect(() => {
    async function loadOrphanages() {
      const { data } = await api.get("/orphanages?accepted=true");
      setOrphanages(data);
    }

    loadOrphanages();
  }, []);

  useEffect(() => {
    async function getUserLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (err) => {
          console.log(err);
        },
        {
          timeout: 30000,
        }
      );
    }
    getUserLocation();
  }, []);

  return (
    <Container>
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>São Paulo</strong>
          <span>São Bernado do Campo</span>
        </Footer>

        <button onClick={() => history.push("/")}>
          <FiArrowLeft />
        </button>
      </Aside>

      <Map
        center={[userLocation.latitude, userLocation.longitude]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage: Orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create">
        <CreateOrphanage>
          <FiPlus size={32} color="#fff" />
        </CreateOrphanage>
      </Link>
    </Container>
  );
}

export default OrphanagesMap;
