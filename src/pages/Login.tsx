import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import { options } from 'ionicons/icons';
import './Login.css';
import React, { useState, useEffect } from 'react'

const Login: React.FC = () => {
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        console.log(input)
    }, [input])

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;