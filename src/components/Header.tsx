import React from "react";
import { IonHeader, IonToolbar, IonButtons, IonButton } from "@ionic/react";
import "./Header.css";

import user from "../assets/user.svg";
import logoNavBar from "../assets/logoNavBar.svg";

import logo from "../assets/logo.png"

const Header: React.FC = () => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <img className="logo-full" src={logo} alt="Logo" />

        <IonButtons slot="end">
          <IonButton id="userIcon" href="/Profile">
            <img src={user} alt="Profile"></img>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
