import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./LeafletMap.css";

import { Icon } from "leaflet";
import markerIcon from "../assets/markerIcon.png";
import shadow from "../assets/shadow.png";
import { Artwork } from "../models/artwork";

import useGeolocation from "../hooks/useGeolocation";

/* Starting position of Map - Berlin */
const position = { lat: 52.52, lng: 13.405 };

interface Props {
  markers: Artwork[];
}

const LeafletMap: React.FC<Props> = (props) => {
  const { markers } = props;

  /* User Location */
  const userLocation = useGeolocation();

  return (
    <MapContainer
      center={[Number(userLocation.lat), Number(userLocation.lng)]}
      zoom={13}
      scrollWheelZoom={false}
      tap={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      /* User Location Marker */
      <Marker position={[Number(userLocation.lat), Number(userLocation.lng)]}>
        <Popup>You are here!</Popup>
      </Marker>
      /* Street Art Location Marker */
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={[
            Number(marker.location.coordinates.lat),
            Number(marker.location.coordinates.lng),
          ]}
          icon={
            new Icon({
              iconUrl: markerIcon,
              iconSize: [25, 41],
              shadowUrl: shadow,
              shadowSize: [41, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            })
          }
        >
          <Popup
            position={[
              Number(marker.location.coordinates.lat),
              Number(marker.location.coordinates.lng),
            ]}
          >
            <div>
              <div className="thumbnailContainer">
                <img id="thumbnail" src={marker.thumbnail}></img>
              </div>

              <div className="artMarkerTitle">{marker.title}</div>
              <div className="artMarkerArtist">//{marker.artist}</div>
              <div className="artMarkerLocation">{marker.location.address}</div>
              <div className="artPage">More details...</div>
            </div>
          </Popup>
        </Marker>
      ))}
      ;<div id="leaflet-map"></div>
    </MapContainer>
  );
};

export default LeafletMap;
