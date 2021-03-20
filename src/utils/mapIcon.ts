import Leafleat from "leaflet";

import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leafleat.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [180, 8],
});

export default mapIcon;
