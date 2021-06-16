import { IonApp } from "@ionic/react";
import BottomMenu from "./components/BottomMenu";
import Header from "./components/Header";

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
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config";
import { Suspense } from "react";

import Home from "./pages/Home";

const App: React.FC = () => (
  <Suspense fallback={<div>Test</div>}>
    <IonApp>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Home />
        <BottomMenu />
      </FirebaseAppProvider>
    </IonApp>
  </Suspense>
);

export default App;
