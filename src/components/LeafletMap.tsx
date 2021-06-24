import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./LeafletMap.css";

const position = { lat: 52.5200, lng: 13.4050 };

const LeafletMap: FC = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <div id="leaflet-map"></div>
    </MapContainer>
  );
};

export default LeafletMap;
