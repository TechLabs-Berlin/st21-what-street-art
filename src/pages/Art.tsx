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
import addBookmark from "../assets/addBookmark.svg";
import iconHeart from "../assets/iconHeart.svg";
import { usePopularArtworks } from "../hooks/artworks";
import AssetSlider from "../components/AssetSlider";

export const Art: React.FC = () => {
  const popularArtworksData = usePopularArtworks({
    limit: 9,
    property: "likes",
  });

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonCard className="artworks-card">
          <div className="top-right">
            <IonButton className="likes" href="/Art" fill="clear">
              <IonIcon icon={iconHeart} slot="icon-only" />
            </IonButton>
            <IonButton className="bookmark" href="/Art" fill="clear">
              <IonIcon icon={addBookmark} slot="icon-only" />
            </IonButton>
          </div>
          <img
            className="artworks-image"
            src="https://www.iheartberlin.de/wp-content/uploads/2018/01/Bruderkuss-Mural.jpg"
            alt=""
          />
          <IonCardTitle className="artworks-title">Item.Title</IonCardTitle>
          <IonCardSubtitle className="artworks-artist">
            Item.Artist
          </IonCardSubtitle>
          <p className="artworks-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            nostrum, maiores quo quod inventore rem consectetur suscipit
            perspiciatis illum? Dolorum illum porro voluptas error tempora unde
            quaerat consequatur doloribus corporis!
          </p>
          <div className="artworks-location">
            <IonIcon icon={locationOutline} size="large"></IonIcon>
            <p className="artworks-address">
              item.location,<br></br>PLZ Berlin
            </p>
          </div>
          <br></br>
          <img
            className="mapArtwork"
            src="https://thumbs.dreamstime.com/b/vector-city-map-berlin-black-white-germany-simple-style-129618693.jpg"
            alt=""
          ></img>
          <div className="mightAlsoLike">
            <AssetSlider
              title="You might also like"
              data={popularArtworksData}
            />
          </div>
          {/* <AssetSlider title="Recently Added" data={recentArtworksData} /> */}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Art;
