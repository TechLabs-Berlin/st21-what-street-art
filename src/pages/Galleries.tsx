import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Galleries.css';

const Galleries: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galleries</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Galleries</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Galleries" />
      </IonContent>
    </IonPage>
  );
};

export default Galleries;
