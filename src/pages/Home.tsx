import React, { useRef, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import Header from "../components/Header";
import SwiperCore, { Pagination } from "swiper/core";
import { usePopularArtworks, useNearYouArtworks } from "../hooks/artworks";
import AssetSlider from "../components/AssetSlider";

import "./Home.css";

// install Swiper modules
SwiperCore.use([Pagination]);

export const Home: React.FC = () => {
  const popularArtworksData = usePopularArtworks({
    limit: 9,
    property: "likes",
  });

  const recentArtworksData = usePopularArtworks({
    limit: 9,
    property: "dateAdded",
  });

  // Later we need to limit to 9
  const nearYouArtworksData = useNearYouArtworks();

  return (
    <IonPage>
      <Header />
      <IonContent>
        <AssetSlider title="Popular" data={popularArtworksData} />
        <AssetSlider title="Recently Added" data={recentArtworksData} />
        <AssetSlider title="Near you" data={nearYouArtworksData} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
