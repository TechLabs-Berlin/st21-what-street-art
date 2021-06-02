import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personCircleOutline, earthOutline, homeOutline, cameraOutline, gridOutline, planetOutline } from 'ionicons/icons';
import Home from '../pages/Home';
import Map from '../pages/Map';
import Galleries from '../pages/Galleries';
import Camera from '../pages/Camera';
import Profile from '../pages/Profile';
import Explore from '../pages/Explore';
import '@ionic/react/css/core.css';


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

  {/* Map */}
        <Route exact path="/Map">
            <Map />
          </Route>

  {/* Galleries */}
          <Route exact path="/Galleries">
            <Galleries />
          </Route>

  {/* Camera */}
          <Route path="/Camera">
            <Camera />
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
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

  {/* Map */}
          <IonTabButton tab="Map" href="/Map">
            <IonIcon icon={earthOutline} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

  {/* Galleries */}
          <IonTabButton tab="Galleries" href="/Galleries">
            <IonIcon icon={gridOutline} />
            <IonLabel>Galleries</IonLabel>
          </IonTabButton>

  {/* Camera */}
          <IonTabButton tab="Camera" href="/Camera">
            <IonIcon icon={cameraOutline} />
            <IonLabel>Camera</IonLabel>
            </IonTabButton>

  {/* Profile */}
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

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