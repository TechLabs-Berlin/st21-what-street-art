import { IonContent, IonPage, IonSlides, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import './Galleries.css';


const Galleries: React.FC = () => {
  return (
  <IonPage>
    <Header />
    <IonContent>
    <IonSlides>
<IonCard>
  <IonCardContent>
    <IonCardHeader>
    <IonCardTitle>Popular</IonCardTitle>
    </IonCardHeader>
    <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0079536013h-1600x1068.jpg" alt="Angriff der 20-Meter-Frau"/>
    <IonCardTitle>
      Angriff der 20-Meter-Frau, Tristan Eaton
      </IonCardTitle>
  </IonCardContent>
</IonCard>
</IonSlides>

<IonSlides>
<IonCard>
  <IonCardContent>
  <IonCardHeader>
    <IonCardTitle>Recently Added</IonCardTitle>
    </IonCardHeader>
    <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0081188948h-1536x1024.jpg" alt="Angriff der 20-Meter-Frau"/>
    <IonCardTitle>
      Test the Best, Birgit Kinder
      </IonCardTitle>
  </IonCardContent>
</IonCard>
</IonSlides>

<IonSlides>
<IonCard>
  <IonCardContent>
  <IonCardHeader>
    <IonCardTitle>Near Me</IonCardTitle>
    </IonCardHeader>
    <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0081188948h-1536x1024.jpg" alt="Angriff der 20-Meter-Frau"/>
    <IonCardTitle>
      Test the Best, Birgit Kinder
      </IonCardTitle>
  </IonCardContent>
</IonCard>
</IonSlides>

    
    </IonContent>
  </IonPage>
);
};

export default Galleries;
