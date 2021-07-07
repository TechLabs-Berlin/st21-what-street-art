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
import AssetSlider from "../components/AssetSlider";
import { RouteComponentProps } from "react-router";
import { useArtwork, useYouMightAlsoLike } from "../hooks/artworks";

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

export const Art: React.FC<Props> = (props) => {
  const { id } = props.match.params;
  const artwork = useArtwork(id);
  const relatedArtworks = useYouMightAlsoLike(id);

  const { title, description, image, artist, location } = artwork;

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonCard className="artworks-card" key={id}>
          <div className="top-right">
            <IonButton className="likes" href="/Art" fill="clear">
              <IonIcon icon={iconHeart} slot="icon-only" />
            </IonButton>
            <IonButton className="bookmark" href="/Art" fill="clear">
              <IonIcon icon={addBookmark} slot="icon-only" />
            </IonButton>
          </div>
          <img className="artworks-image" src={image} alt="" />
          <IonCardTitle className="artworks-title">
            {title}
            <IonCardSubtitle className="artworks-artist">
              {artist}
            </IonCardSubtitle>
            <p className="artworks-info">{description}</p>
            <div className="artworks-location">
              <IonIcon icon={locationOutline} size="large"></IonIcon>
              <p className="artworks-address">{location.city}</p>
            </div>
            <AssetSlider title="You might also like" data={relatedArtworks} />
          </IonCardTitle>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Art;
