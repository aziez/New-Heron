import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Home.css";
import Heading from "../../components/Heading/Heading";
import styled from "@emotion/styled";

const Home: React.FC = () => {
  const Content = styled(IonContent)(
    `
  --background: rgb(32,32,32) url('gate-l_new.jpg') no-repeat center center / cover;
  `,
    {
      position: "absolute",
      overflow: "hidden",
      height: "100vh",
      width: "100vw",
    }
  );
  return (
    <IonPage>
      <Heading />
      <Content fullscreen>
        <ExploreContainer />
      </Content>
    </IonPage>
  );
};

export default Home;
