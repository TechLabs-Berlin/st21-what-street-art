import { IonContent, IonPage, IonToggle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import './Settings.css';

const Settings: React.FC = () => {
  return (
        <IonPage>
          <Header />
          <IonContent fullscreen>
            <ExploreContainer name="Settings" />
          </IonContent>
        </IonPage>
      );
    };
    
export default Settings;


{/*use ion-nav for settings options*/}
