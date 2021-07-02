import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./LeafletMap.css";

import { Icon } from "leaflet";
import markerIcon from "../assets/markerIcon.png";
import shadow from "../assets/shadow.png";
import { Artwork } from "../models/artwork";

/* Starting position of Map */
const position = { lat: 52.52, lng: 13.405 };

interface Props {
  markers: Artwork[];
}

const LeafletMap: FC<Props> = (props) => {
  const { markers } = props;

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

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
              <div className="artMarkerTitle">{marker.title}</div>  <div className="artMarkerArtist">//{marker.artist}</div>
            
              <div className="artMarkerLocation">{marker.location.address}</div>
           
            </div>
          </Popup>
        </Marker>
      ))}

      <div id="leaflet-map"></div>
    </MapContainer>
  );
};

export default LeafletMap;
