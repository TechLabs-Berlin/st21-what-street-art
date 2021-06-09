import { IonContent, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { cameraOutline, trash, close } from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import './Camera.css';
import { usePhotoGallery } from "../hooks/usePhotoGallery";


const Camera: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery()
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
          {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
        ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={cameraOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Camera;

// Possible camera code: https://ionicframework.com/docs/vue/your-first-app
