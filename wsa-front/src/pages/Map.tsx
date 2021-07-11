import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";
import LeafletMap from "../components/LeafletMap";
import { useArtworks } from "../hooks/artworks";

const Map: React.FC = () => {
  const data = useArtworks();

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <LeafletMap markers={data} />
      </IonContent>
    </IonPage>
  );
};

export default Map;

// See below website:
// https://www.techiediaries.com/ionic-geolocation-google-maps-places-api/
