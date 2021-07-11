import React, { useState } from "react";
import { IonContent, IonPage } from '@ionic/react';
import './Explore.css';
import Header from '../components/Header';

import ImageGrid from '../components/ImageGrid';

import { usePopularArtworks } from "../hooks/artworks";

export const Explore: React.FC = () => {
  const popularArtworksData = usePopularArtworks({
    limit: 60,
    property: "id",
  });

  return (
    <IonPage>
      <Header />
      <IonContent>
        <h1 className="explore">Explore</h1>

        <ImageGrid data={popularArtworksData} />

      </IonContent>
    </IonPage>
  );
};

// The memo uses the memory to render less
export default React.memo(Explore);

