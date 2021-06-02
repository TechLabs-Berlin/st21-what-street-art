import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import './Header.css';


const Header: React.FC = () => {
return (
    <IonHeader>
      <IonToolbar>
        <IonTitle class="headerTitle">What Street Art</IonTitle>
      </IonToolbar>
    </IonHeader>
);
};

export default Header;