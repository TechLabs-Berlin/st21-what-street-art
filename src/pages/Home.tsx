import { IonCard, IonCardTitle, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
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
  <IonCardContent>
    <IonCardHeader>
    <IonCardTitle>Popular</IonCardTitle>
    </IonCardHeader>
    <img src="https://www.tip-berlin.de/wp-content/uploads/2020/05/imago0079536013h-1600x1068.jpg" alt="Angriff der 20-Meter-Frau"/>
    <IonCardTitle>
      Angriff der 20-Meter-Frau, Tristan Eaton
      </IonCardTitle>
    <p>
      The Los Angeles-born artist was inspired by film history and translated the B-movie classic "Attack of the 20-Meter Woman" (1958) for his film painting.
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