import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personCircleOutline, earthOutline, homeOutline, cameraOutline } from 'ionicons/icons';
import Home from './Home';
import Map from './Map';
import Camera from './Camera';
import Profile from './Profile';
import Galleries from './Galleries';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


const BottomTab: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

//Routes
  //Map
          <Route exact path="/Map">
            <Map />
          </Route>

  //Galleries
          <Route exact path="/Galleries">
            <Galleries />
          </Route>

  //Camera
          <Route path="/Camera">
            <Camera />
            </Route>

  //Profile
          <Route path="/Profile">
            <Profile />
          </Route>

  //Explore  
          <Route exact path="/">
            <Redirect to="/Explore" />
          </Route>

        </IonRouterOutlet>


        

        <IonTabBar slot="bottom">


//Map
        <IonTabButton tab="Map" href="/Map">
            <IonIcon icon={earthOutline} />
            <IonLabel>Map</IonLabel>
        </IonTabButton>

//Galleries 
          <IonTabButton tab="Galleries" href="/Galleries">
            <IonIcon icon={homeOutline} />
            <IonLabel>Galleries</IonLabel>
          </IonTabButton>

//Camera
          <IonTabButton tab="Camera" href="/Camera">
            <IonIcon icon={cameraOutline} />
            <IonLabel>Camera</IonLabel>
            </IonTabButton>

//Profile
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

//Explore
          <IonTabButton tab="Explore" href="/Explore">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>




        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default BottomTab;
