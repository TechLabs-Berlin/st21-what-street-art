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
import {
  earthOutline,
  cameraOutline,
  gridOutline,
  planetOutline,
} from "ionicons/icons";
/*{import Home from '../pages/Home';}*/
import Map from "../pages/Map";
import Scan from "../pages/Scan";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";

import Settings from "../pages/Settings";

import "@ionic/react/css/core.css";

import map from '../assets/map.svg'
import './BottomMenu.css';


const BottomMenu: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Routes */}
          {/* Home
  {/*<Route exact path="/Home">
            <Home />
  </Route>*/}
  {/* Settings */}
  
          <Route exact path="/Settings">
            <Settings />
          </Route>

          {/* Map */}
          <Route exact path="/Map">
            <Map />
          </Route>

          {/* Galleries 
          <Route exact path="/Galleries">
            <Galleries />
          </Route> */}

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
          {/* Home 
  <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>/*/}

          {/* Map */}       
          <IonTabButton tab="Map" href="/Map">
            <img src={map} alt="Map" />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          {/* Galleries 
          <IonTabButton tab="Galleries" href="/Galleries">
            <IonIcon icon={gridOutline} />
            <IonLabel>Galleries</IonLabel>
          </IonTabButton> */}

          {/* Scan */}
          <IonTabButton tab="Scan" href="/Scan">
            <IonIcon icon={cameraOutline} />
            <IonLabel>Scan</IonLabel>
          </IonTabButton>

          {/* Profile */}
            {/*Now located in Header.tsx}

          {/* Explore */}
          <IonTabButton tab="Explore" href="/Explore">
            <IonIcon icon={planetOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default BottomMenu;
