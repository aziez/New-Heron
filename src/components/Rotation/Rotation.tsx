import { IonImg, IonRow, IonText } from "@ionic/react";
import rotate from "../../../public/rotate.json";
import Lottie from "lottie-react";
import "./Rotation.css";

interface ContainerProps {}

const Rotation: React.FC<ContainerProps> = () => {
  const rotateStyle = {
    height: 300,
  };

  return (
    <div className="container">
      <Lottie animationData={rotate} style={rotateStyle} />
      <IonText color={"primary"}>
        <p>
          <b>Please rotate your devices</b>
        </p>
        <br />
        <p>Powered by</p>
        <br />
      </IonText>
      <IonRow className="row">
        <IonImg src="ss.png" alt="Logo Vendor" style={{ width: "25%" }} />
      </IonRow>
    </div>
  );
};

export default Rotation;
