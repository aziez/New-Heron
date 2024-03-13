import styled from "@emotion/styled";
import {
  IonAlert,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const router = useIonRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controls = useAnimation();
  const audio = new Audio("audio.mp3");
  const [isOpen, setIsOpen] = useState(false);

  //   const toggleFullscreen = async () => {
  //     if (document.fullscreenElement) {
  //       await document.exitFullscreen();
  //       setIsFullscreen(false);
  //       audio.pause();
  //     } else {
  //       await document.documentElement.requestFullscreen();
  //       setIsFullscreen(true);
  //       controls.start({ opacity: 0 });
  //       audio.loop = true;
  //       audio.volume = 0.15;
  //       if (audio.paused) {
  //         audio.play();
  //       }
  //     }
  //   };
  //
  //   useEffect(() => {
  //     if (!isFullscreen) {
  //       setIsOpen(true);
  //     } else {
  //       setIsOpen(false);
  //     }
  //   }, [isFullscreen]);

  const Main = styled(motion.div)({
    position: "relative",
    textAlign: "center",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  });

  const GridWrapper = styled(IonGrid)({
    height: "100%",
  });

  const RowWrapper = styled(IonRow)({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  });

  const ColStyle = styled(IonCol)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  });

  const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    place-items: center;
  `;

  const CenterBottomImg = styled(motion(IonImg))`
    width: 30%;
    align-self: end;
    margin-bottom: 10%; /* Add space on the bottom */
    margin-left: 20%; /* Add space on the right */
  `;

  const kuponHoverAnimation = {
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  };

  const kuponClickAnimation = {
    rotate: 21,
    transition: {
      duration: 0.5,
    },
  };

  const StyledAlert = styled(IonAlert)(`
    --backdrop-opacity: 80%;
    --background: var(--ion-color-success)

  `);

  const handleNext = () => {
    audio.play();
    (audio.loop = true), (audio.volume = 0.6);
    router.push("/selection");
  };

  return (
    <Main animate={controls} initial={{ opacity: 1 }}>
      {/* <StyledAlert
        mode="ios"
        isOpen={isOpen}
        header="Change screen"
        buttons={[
          {
            text: "Fullscreen",
            role: "confirm",
            handler: () => (toggleFullscreen(), setIsOpen(false)),
          },
        ]}
        onDidDismiss={() => (toggleFullscreen(), setIsOpen(false))}
      /> */}
      <GridWrapper>
        <RowWrapper>
          <ColStyle size="auto">
            <div
              style={{
                width: "calc(100vw - 60vw)",
                height: "100vh",
                // backgroundColor: "red",
              }}
            >
              <ImgContainer>
                <CenterBottomImg
                  whileHover={kuponHoverAnimation}
                  whileTap={kuponClickAnimation}
                  src="icon/start.png"
                  onClick={() => handleNext()}
                />
              </ImgContainer>
            </div>
          </ColStyle>
          <ColStyle></ColStyle>
        </RowWrapper>
      </GridWrapper>
    </Main>
  );
};

export default ExploreContainer;
