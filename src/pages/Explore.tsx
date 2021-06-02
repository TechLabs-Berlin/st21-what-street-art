import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Explore</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Explore" />
      </IonContent>
    </IonPage>
  );
};

export default Explore;
