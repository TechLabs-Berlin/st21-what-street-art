import React, { useRef, useState } from "react";

import { 
  IonContent,
  IonPage, 
  IonCard, 
  IonCardTitle, 
  IonCardContent, 
  IonButton, 
  IonAvatar, 
  useIonViewDidEnter,
  useIonViewDidLeave,
   } from '@ionic/react';

import Header from '../components/Header';
import './Profile.css';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { usePopularArtworks, useNearYouArtworks } from "../hooks/artworks";
import AssetSlider from "../components/AssetSlider";


import cutie from '../assets/cutie.png';
import editProfile from '../assets/editProfile.svg';


export const Profile: React.FC = () => {
  const popularArtworksData = usePopularArtworks({
    limit: 9,
    property: "likes",
  });

  const recentArtworksData = usePopularArtworks({
    limit: 9,
    property: "dateAdded",
  });


  // Optimizing Page Renders
  const [isVisible, setIsVisible] = useState(true);

  useIonViewDidEnter(() => {
    console.log("useIonViewDidEnter");
    setIsVisible(true);
  });

  useIonViewDidLeave(() => {
    console.log("useIonViewDidLeave");
    setIsVisible(false);
  });

  if (!isVisible) return null;


  return (
    <IonPage>
      <Header />
      <IonContent>
        <h1 className="yourProfile">Your Profile</h1>
        <IonCard>
          <IonCardContent>
            <IonAvatar class="avatar">
      <img src={cutie} />
      </IonAvatar>
              <IonButton className="editProfile" fill="outline" size="default" href="/Profile">
                Edit Profile
                <img src={editProfile} id="editProfileIcon"></img>
              </IonButton>
            
             <IonCardTitle class="profileName">UserName</IonCardTitle>
          </IonCardContent>
        </IonCard>

    <div>
        <AssetSlider title="Liked Artworks" data={popularArtworksData}/> 
          <IonButton>See all</IonButton>
    </div>
      
    <div>
        <AssetSlider title="Saved Artworks" data={recentArtworksData} />
          <IonButton>See all</IonButton>
    </div>


      </IonContent>
    </IonPage>
  );
};

// The memo uses the memory to render less
export default React.memo(Profile);