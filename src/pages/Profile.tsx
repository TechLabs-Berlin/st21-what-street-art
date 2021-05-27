import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonChip } from '@ionic/react';
import { pin, wifi, wine, warning, walk, heartOutline, bookmarkOutline, personOutline, exitOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonAvatar class="avatar">
      <img src="https://ca.slack-edge.com/T6QB33X0T-U01RJ95D74Z-45314715827d-512" />
      </IonAvatar>
            <IonCardTitle class="profileName">Anna Lebedenko</IonCardTitle>
            <IonCardSubtitle class="profileName">@annalebedenko</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

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
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
