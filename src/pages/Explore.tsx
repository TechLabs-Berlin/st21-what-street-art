import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';
import Header from '../components/Header';

const Explore: React.FC = () => {
  return (
        <IonPage>
          <Header />
          <IonContent fullscreen>
            <ExploreContainer name="Explore" />
          </IonContent>
        </IonPage>
      );
    };
    

export default Explore;
