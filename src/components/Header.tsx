import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import './Header.css';



const Header: React.FC = () => {
return (
    <IonHeader>
        <IonToolbar>
            <IonTitle className="headerTitle">What Street Art</IonTitle>
            <IonButtons slot="primary">
            <IonButton href="/Settings">
          <IonIcon icon={settingsOutline}/>
        </IonButton>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
);
};


export default Header;

