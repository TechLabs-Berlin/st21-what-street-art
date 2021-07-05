import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';
import Header from '../components/Header';

const Explore: React.FC = () => {
  return (
        <IonPage>
          <Header />
          <IonContent>
            <h1 className="explore">Explore</h1>

            <IonGrid>
              <IonRow>
                <IonCol size="3">
                  <div>Hewo</div>
                </IonCol>
                <IonCol size="3">
                  <div>Hewo</div>
                </IonCol>
                <IonCol size="3">
                  <div>Hewo</div>
                </IonCol>

              </IonRow>

            </IonGrid>
          </IonContent>
        </IonPage>
      );
    };
    

export default Explore;

