import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./LeafletMap.css";

import ArtSites from "../data/artworkLocations.json";

const position = { lat: 52.5200, lng: 13.4050 };

const LeafletMap: FC = () => {

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
      
      
      {ArtSites.map(artw => (
      <Marker 
      key = {artw.id}
      position = {[artw["location/lat"], artw["location/lng"]]}>
          <Popup position = {[artw["location/lat"], artw["location/lng"]]}>
            <div>
              <h5 className = "artMarkerTitle">
                {artw.title}
              </h5>
              <h6>
                {artw["location/address"]}
              </h6>
              
              
            </div>
          </Popup>


      </Marker>

    ))}
  

      <div id="leaflet-map"></div>
    </MapContainer>
  );
};

export default LeafletMap;