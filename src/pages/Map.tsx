import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";
import LeafletMap from "../components/LeafletMap";

const Map: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen color="dark">
        <LeafletMap />
      </IonContent>
    </IonPage>
  );
};

export default Map;

// See below website:
// https://www.techiediaries.com/ionic-geolocation-google-maps-places-api/
