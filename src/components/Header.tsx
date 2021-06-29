import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import './Header.css';

import user from '../assets/user.svg';



const Header: React.FC = () => {
return (
    <IonHeader>
        <IonToolbar color="dark">
            <h1>What Street Art</h1>

            <IonButtons slot="end">
                <IonButton>
                <img src={user} alt="User" />
                </IonButton>
            </IonButtons>

        </IonToolbar>
    </IonHeader>

);
};


export default Header;
