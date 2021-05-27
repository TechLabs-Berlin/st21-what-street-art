import { IonCard, IonCardTitle, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonSlides } from '@ionic/react';
import { options } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>What Street Art</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

{/* Popular Horizontal Slide */}
{/* https://swiperjs.com/react */}

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

