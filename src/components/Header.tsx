import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonHeader, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTitle, IonRouterOutlet } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import './Header.css';
import Settings from '../pages/Settings';
import { IonReactRouter } from '@ionic/react-router';



const Header: React.FC = () => {
return (
    <IonToolbar>
        <h1 className="headerTitle">What Street Art</h1>
        <IonReactRouter>
            
    <IonTabs>
        <IonRouterOutlet>

{/* Routes */}
    {/* Settings */}
            <Route exact path="/Settings">
                <Settings />
            </Route>
        </IonRouterOutlet>


<IonTabBar slot="top">


{/* Tabs */}
  {/* Settings */}
  <IonTabButton tab="Settings" href="/Settings">
           <IonIcon icon={settingsOutline} />
          </IonTabButton>
          <IonTitle>What Street Art</IonTitle>
          </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </IonToolbar>
  );
};

export default Header;

