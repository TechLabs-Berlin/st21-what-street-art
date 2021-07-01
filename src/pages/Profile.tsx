import { IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { heartOutline, bookmarkOutline, personOutline, exitOutline, createOutline } from 'ionicons/icons';
import Header from '../components/Header';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <h1 className="yourProfile">Your Profile</h1>
        <IonCard>
          <IonCardContent>
            <IonAvatar class="avatar">
      <img src="https://ca.slack-edge.com/T6QB33X0T-U01RJ95D74Z-45314715827d-512" />
      </IonAvatar>
              <IonButton strong className="editProfile" fill="outline" size="default" href="/Profile">Edit Profile<IonIcon icon={createOutline} slot="end" />
              </IonButton>
             <IonCardTitle class="profileName">@annalebedenko</IonCardTitle>
          </IonCardContent>
        </IonCard>
{/* 
        <IonCard>
          <IonItem>
            <IonIcon icon={heartOutline} slot="start" />
            <IonLabel>Liked Artworks</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonItem href="#" className="ion-activated">
            <IonIcon icon={bookmarkOutline} slot="start" />
            <IonLabel>Saved Artworks</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={personOutline} slot="start" />
            <IonLabel>Edit Profile</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={exitOutline} slot="start" />
            <IonLabel>Log Out</IonLabel>
          </IonItem>
        </IonCard> */}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
