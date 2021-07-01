import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import './Header.css';

import user from '../assets/user.svg';
import logoNavBar from '../assets/logoNavBar.svg';



const Header: React.FC = () => {
return (
    <IonHeader>
        <IonToolbar>
            
                <img className = "logo-full" src = {logoNavBar} alt="Logo"/>      

            <IonButtons slot="end">
                <IonButton href="/Profile">
                <img src={user} alt="Profile" ></img>
                </IonButton>
            </IonButtons>

        </IonToolbar>
    </IonHeader>

);
};


export default Header;

