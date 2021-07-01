import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from '../pages/Home';
import Map from "../pages/Map";
import Scan from "../pages/Scan";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";

import Settings from "../pages/Settings";

import "@ionic/react/css/core.css";

import map from '../assets/map.svg';
import explore from '../assets/explore.svg';
import camera from '../assets/camera.svg';
import home from '../assets/home.svg';

import './BottomMenu.css';


const BottomMenu: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        {/* Routes */}
          {/* Home */}
          <Route exact path="/Home">
            <Home />
          </Route>
  
          {/* Settings */}
          <Route exact path="/Settings">
            <Settings />
          </Route>

          {/* Map */}
          <Route exact path="/Map">
            <Map />
          </Route>

          {/* Scan */}
          <Route path="/Scan">
            <Scan />
          </Route>

          {/* Profile */}
          <Route path="/Profile">
            <Profile />
          </Route>

          {/* Explore */}
          <Route path="/Explore">
            <Explore />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          
          {/* Tabs */}
          {/* Home */}
          <IonTabButton tab="Home" href="/Home">
            <img src={home} alt="Home" />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          {/* Map */}
           <IonTabButton tab="Map" href="/Map">
            <img src={map} alt="Map" />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
     
          {/* Scan */}
          <IonTabButton tab="Scan" href="/Scan">
            <img src={camera} alt="Scan" />
            <IonLabel>Scan</IonLabel>
          </IonTabButton>

          {/* Explore */}
         <IonTabButton tab="Explore" href="/Explore">
            <img src={explore} alt="Explore" />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
        
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default BottomMenu;
