import React, { useState } from "react";
import { IonContent, IonPage} from '@ionic/react';
import './Explore.css';
import Header from '../components/Header';

import ImageGrid from '../components/ImageGrid';

import { useArtwork } from "../hooks/artworks";

export const Explore: React.FC = () => {
    const gridImagesId = useArtwork ({
      limit: 18,
      id: string,
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
            <h1 className="explore">Explore</h1>

          <ImageGrid data={gridImagesId} />

    </IonContent>
  </IonPage>
);
};

// The memo uses the memory to render less
export default React.memo(Explore);

