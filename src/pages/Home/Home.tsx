import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Home.css";
import MainPages from "../../components/Pages/Page";

const Home: React.FC = () => {
  return (
    <MainPages backgroundUrl="gate-l_new.jpg">
      <ExploreContainer />
    </MainPages>
  );
};

export default Home;
