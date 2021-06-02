import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import './Map.css';

const Map: React.FC = () => {
  return (
    <IonPage>
      <Header />
    <IonContent fullscreen>
      <ExploreContainer name="Map" />
    </IonContent>
  </IonPage>
);
};

export default Map;

// See below website:
// https://www.techiediaries.com/ionic-geolocation-google-maps-places-api/