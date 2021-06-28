import { useState } from "react";
import { IonContent, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { cameraOutline, trash, close } from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import './Scan.css';
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";


const Scan: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery()
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
          {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
              <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
            </IonCol>
        ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={cameraOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              if (photoToDelete) {
                deletePhoto(photoToDelete);
                setPhotoToDelete(undefined);
              }
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel'
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Scan;