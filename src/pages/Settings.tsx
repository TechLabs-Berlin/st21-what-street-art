import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Settings.css';

const Settings: React.FC = () => {
  return (
        <IonPage>
          <IonContent fullscreen>
            <ExploreContainer name="Settings" />
          </IonContent>
        </IonPage>
      );
    };
    
export default Settings;
