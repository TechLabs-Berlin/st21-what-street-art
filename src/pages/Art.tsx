import React from "react";
import {
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonPage,
} from "@ionic/react";
import { locationOutline } from "ionicons/icons";
import Header from "../components/Header";
import "./Art.css";
import { Artwork } from "../models/artwork";
import addBookmark from "../assets/addBookmark.svg";
import iconHeart from "../assets/iconHeart.svg";

interface Props {
  data?: Artwork[];
}

const Art: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {data?.map((item) => {
          return (
            <IonCard className="artworks-card" key={item.id}>
              <div className="top-right">
                <IonButton className="likes" href="/Art" fill="clear">
                  <IonIcon icon={iconHeart} slot="icon-only" />
                </IonButton>
                <IonButton className="bookmark" href="/Art" fill="clear">
                  <IonIcon icon={addBookmark} slot="icon-only" />
                </IonButton>
              </div>
              <img className="artworks-image" src={item.image} alt="" />
              <IonCardTitle className="artworks-title">
                {item.title}
                <IonCardSubtitle className="artworks-artist">
                  {item.artist}
                </IonCardSubtitle>
                <p className="artworks-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="artworks-location">
                  <IonIcon icon={locationOutline} size="large"></IonIcon>
                  <p className="artworks-address">{item.location}</p>
                </div>
              </IonCardTitle>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Art;
