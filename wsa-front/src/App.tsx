import { IonApp, IonSpinner, IonRouterOutlet } from "@ionic/react";
import BottomMenu from "./components/BottomMenu";
import Header from "./components/Header";
import { IonReactRouter } from "@ionic/react-router";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config";
import { Suspense } from "react";

import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// Cleaned the code a bit. Changed the suspense to the spinning weel but not sure yet if we add a css to the app and place it centered or we add the code directly to this file. Added routes to the pages, know the Profile is loading faster but still, when coming back from Profile it takes a lot to load, as the app is loading from the start.

const App: React.FC = () => {
  return (
    <IonApp>
      <Suspense
        fallback={
          <div className="ion-text-center">
            <IonSpinner color="primary" name="lines" />
          </div>
        }
      >
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <IonReactRouter>
            <IonRouterOutlet>
              <Header />
              <Home />
              <BottomMenu />
            </IonRouterOutlet>
          </IonReactRouter>
        </FirebaseAppProvider>
      </Suspense>
    </IonApp>
  );
};

export default App;
