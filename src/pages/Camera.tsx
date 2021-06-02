import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Camera.css';

const Camera: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer name="Camera" />
      </IonContent>
    </IonPage>
  );
};

export default Camera;

// Possible camera code: https://ionicframework.com/docs/vue/your-first-app
