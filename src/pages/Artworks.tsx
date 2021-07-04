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
import "./Artworks.css";

import addBookmark from "../assets/addBookmark.svg";
import iconHeart from "../assets/iconHeart.svg";

export const Artworks: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonCard className="artworks-card">
          <div className="top-right">
            <IonButton className="likes" href="/Artworks" fill="clear">
              <IonIcon icon={iconHeart} slot="icon-only" />
            </IonButton>
            <IonButton className="bookmark" href="/Artworks" fill="clear">
              <IonIcon icon={addBookmark} slot="icon-only" />
            </IonButton>
          </div>
          <img
            className="artworks-image"
            src="https://i1.wp.com/www.theculturemap.com/wp-content/uploads/2014/02/Anne-Frank-street-art-Berlin.jpg?w=1600"
            alt=""
          />
          <IonCardTitle className="artworks-title">
            Artwork Title
            <IonCardSubtitle className="artworks-artist">
              Artist Name
            </IonCardSubtitle>
            <p className="artworks-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              exercitationem odio magni praesentium laboriosam excepturi sed
              provident. Blanditiis excepturi quia deserunt expedita, corporis
              tenetur nostrum error eius ab iusto quod!
            </p>
            <div className="artworks-location">
              <IonIcon icon={locationOutline} size="large"></IonIcon>
              <p className="artworks-address">
                Mauer Berlin, <br></br> 10243 Berlin
              </p>
            </div>
          </IonCardTitle>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Artworks;
