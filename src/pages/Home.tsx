import { IonCard, IonCardTitle, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

    <IonCard>
  <img src="/Users/mbpassos/what-street-art/resources/1.png" alt=""/>
  <IonCardContent>
    <IonCardTitle>
      Nine Inch Nails Live
      </IonCardTitle>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
  </IonCardContent>
</IonCard>






      </IonContent>
    </IonPage>
  );
};

export default Home;

// My attempt to write an menu without success:
//     <IonPage>
//     <IonMenu menuId="mainMenu" contentId="main">
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Home</IonTitle>
//           <IonButtons slot="start">
//             <IonMenuButton></IonMenuButton>
//           </IonButtons>
//         </IonToolbar>
//       </IonHeader>
//       <ExploreContainer name="Home" />
//       <IonContent>
//         {/* <IonList>
//           <IonItem>
//             <IonIcon icon={menu} slot="mail"></IonIcon>
//             <IonLabel>Inbox</IonLabel>
//           </IonItem>
//         </IonList> */}
//       </IonContent>
//     </IonMenu>
//   </IonPage>
//   );
// };