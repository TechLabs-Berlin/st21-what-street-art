import { Route } from "react-router-dom";
import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "../pages/Home";
import Map from "../pages/Map";
import Scan from "../pages/Scan";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Art from "../pages/Art";

import "@ionic/react/css/core.css";

import "./BottomMenu.css";
import {
  cameraOutline,
  homeOutline,
  mapOutline,
  rocketOutline,
} from "ionicons/icons";

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

          {/* Art */}
          <Route path="/Art/:id" component={Art} />

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
            <IonIcon src={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          {/* Map */}
          <IonTabButton tab="Map" href="/Map">
            <IonIcon src={mapOutline} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          {/* Scan */}
          <IonTabButton tab="Scan" href="/Scan">
            <IonIcon src={cameraOutline} />
            <IonLabel>Scan</IonLabel>
          </IonTabButton>

          {/* Explore */}
          <IonTabButton tab="Explore" href="/Explore">
            <IonIcon src={rocketOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default BottomMenu;
