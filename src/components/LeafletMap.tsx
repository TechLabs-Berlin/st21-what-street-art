import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./LeafletMap.css";

import ArtSites from "../data/artworkLocations.json";

import {Icon} from 'leaflet'
import markerIcon from "../assets/markerIcon.png"
import shadow from "../assets/shadow.png"

{/* Geolocation */}
import useGeolocation from "../hooks/useGeolocation";

{/* Geolocation */}
const location = useGeolocation();

{/* Starting position of Map */}
const position = { lat: 52.5200, lng: 13.4050 };

const LeafletMap: FC = () => {

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
      
      
      {ArtSites.map(artw => (
      <Marker 
      key = {artw.id}
      position = {[artw["location/lat"], artw["location/lng"]]}
      icon = {new Icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        shadowUrl: shadow,
        shadowSize: [41, 41],
        iconAnchor: [12, 41],
	      popupAnchor: [1, -34]
        })}>
     
          <Popup position = {[artw["location/lat"], artw["location/lng"]]}>
            <div>
              <h5 className = "artMarkerTitle">
                {artw.title}
              </h5>
              <h6>
                {artw["location/address"]}
              </h6>
              <div className = "thumbnailContainer"> 
                	<img id="thumbnail" src={artw.thumbnail}></img>
              </div>
            </div>
          </Popup>
      </Marker>

    ))}
  

      <div id="leaflet-map"></div>
    </MapContainer>
  );
};

export default LeafletMap;
