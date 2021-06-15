import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import './Header.css';



const Header: React.FC = () => {
return (
    <IonHeader>
        <IonToolbar>
            <h1>What Street Art</h1>

            <IonButtons slot="end">
                <IonButton href="/Profile">
                    <IonIcon icon={personOutline}/>
                </IonButton>
            </IonButtons>

        </IonToolbar>
    </IonHeader>

);
};


export default Header;