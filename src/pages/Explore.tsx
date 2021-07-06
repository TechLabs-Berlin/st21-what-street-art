import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';
import Header from '../components/Header';

import cutie from '../assets/cutie.png';

const Explore: React.FC = () => {


  return (
        <IonPage>
          <Header />
          <IonContent>
         
            <h1 className="explore">Explore</h1>

            <IonGrid>
              <IonRow class="ion-no-margin">

                <IonCol class="ion-no-padding" size = "4">
                    <div className="img-wrap">
                      <a href="/Art"> 
                        <img className="images" src={cutie} alt=""/>
                          <div className="overlay">
                            <div className="overlayText">Not your Garfield</div>
                         </div>
                      </a>
                    </div>
                </IonCol>

              </IonRow>
            </IonGrid>
         
          </IonContent>
        </IonPage>
      );
    }

    export default Explore;
