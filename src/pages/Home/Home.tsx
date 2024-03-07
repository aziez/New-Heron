import {
  IonAlert,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Home.css";
import MainPages from "../../components/Pages/Page";
import { App } from "@capacitor/app";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const router = useIonRouter();

  // Use `ionBackButton` event within a React context
  useEffect(() => {
    const backButtonEvent = document.addEventListener(
      "ionBackButton",
      (evy: any) => {
        evy.detail.register(-1, () => {
          if (!router.canGoBack()) {
            setShowAlert(true);
          }
        });
      }
    );

    // Cleanup event listener on unmount
  }, []);

  return (
    <MainPages backgroundUrl="gate.jpg">
      <IonAlert
        isOpen={showAlert}
        header="Are you sure?"
        message="Do you really want to exit the app?"
        buttons={[
          {
            text: "No",
            role: "cancel",
            cssClass: "secondary",
            handler: () => setShowAlert(false),
          }, // Close alert on "No" button
          { text: "Yes", handler: () => App.exitApp() },
        ]}
      />
      <ExploreContainer />
    </MainPages>
  );
};

export default Home;
