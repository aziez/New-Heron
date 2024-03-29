import styled from "@emotion/styled";
import { IonContent, IonPage } from "@ionic/react";
import { FC, ReactNode } from "react";
import Heading from "../Heading/Heading";
interface MainPagesProps {
  children: ReactNode;
  backgroundUrl?: string;
}

const MainPages: FC<MainPagesProps> = ({ children, backgroundUrl }) => {
  const Content = styled(IonContent)`
    ${backgroundUrl &&
    `--background: rgb(32, 32, 32) url(${backgroundUrl}) no-repeat center center / cover;`}
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  `;

  return (
    <>
      <IonPage id="color-content">
        <Heading />
        <Content fullscreen>{children}</Content>
      </IonPage>
    </>
  );
};

export default MainPages;
