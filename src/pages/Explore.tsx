import { IonContent, IonPage, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';
import Header from '../components/Header';

const Explore: React.FC = () => {
  return (
        <IonPage>
          <Header />
          <IonContent fullscreen>
            <IonText>
            <h1>Explore</h1>
            </IonText>
            <ExploreContainer name="Explore" />
          </IonContent>
        </IonPage>
      );
    };
    

export default Explore;
