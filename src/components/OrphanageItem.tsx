import React, { useContext } from "react";
import { FiEdit3, FiTrash, FiArrowRight } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { ThemeContext } from "styled-components";
import { Container, Footer } from "../styles/components/orphanage-item";
import { Orphanage } from "../pages/Orphanage";
import mapIcon from "../utils/mapIcon";
import { Link } from "react-router-dom";

interface OrphanageItemProps {
  orphanage: Orphanage;
  showAcceptedOrphanages: boolean;
}

export default function OrphanageItem({
  orphanage,
  showAcceptedOrphanages,
}: OrphanageItemProps) {
  const { title } = useContext(ThemeContext);
  return (
    <>
      <Container className="map-container">
        <Map
          center={[orphanage.latitude, orphanage.longitude]}
          zoom={16}
          style={{ width: "100%", height: 220 }}
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

        <Footer>
          <strong>{orphanage.name}</strong>
          <div>
            {showAcceptedOrphanages ? (
              <>
                <Link to={`/edit/${orphanage.id}`}>
                  <FiEdit3 />
                </Link>
                <Link to={`/delete/${orphanage.id}`}>
                  <FiTrash />
                </Link>
              </>
            ) : (
              <Link to={`/edit/${orphanage.id}`}>
                <FiArrowRight />
              </Link>
            )}
          </div>
        </Footer>
      </Container>
    </>
  );
}
