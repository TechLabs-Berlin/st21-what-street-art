import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Galleries.css';

const Galleries: React.FC = () => {
  return (
  <IonPage>
    <IonContent fullscreen>
      <ExploreContainer name="Galleries" />
    </IonContent>
  </IonPage>
);
};

export default Galleries;
