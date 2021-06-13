import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';
import Header from '../components/Header';

const Explore: React.FC = () => {
  return (
        <IonPage>
          <Header />
          <IonContent fullscreen>
            <h1>Explore</h1>
            <ExploreContainer name="Explore" />
          </IonContent>
        </IonPage>
      );
    };
    

export default Explore;
