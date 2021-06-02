import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';

const Explore: React.FC = () => {
  return (
        <IonPage>
          <IonContent fullscreen>
            <ExploreContainer name="Explore" />
          </IonContent>
        </IonPage>
      );
    };
    

export default Explore;
