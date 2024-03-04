import styled from "@emotion/styled";
import { IonAlert, IonCol, IonGrid, IonRow, useIonRouter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const router = useIonRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controls = useAnimation();
  const audio = new Audio("audio.mp3");
  const [isOpen, setIsOpen] = useState(false);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
      audio.pause();
    } else {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
      controls.start({ opacity: 0 });
      audio.loop = true;
      audio.volume = 0.15;
      if (audio.paused) {
        audio.play();
      }
    }
  };

  useEffect(() => {
    if (!isFullscreen) {
      setIsOpen(true);
    } else {
      // Close the alert if isFullscreen is true
      setIsOpen(false);
    }
  }, [isFullscreen]);

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

  const StyledAlert = styled(IonAlert)(`
    --backdrop-opacity: 80%;
    --background: var(--ion-color-success)

  `);

  return (
    <Main animate={controls} initial={{ opacity: 1 }}>
      <StyledAlert
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
      />
      <GridWrapper>
        <RowWrapper>
          <ColStyle size="auto">
            <div
              style={{
                width: "calc(100vw - 60vw)",
                height: "100vh",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  height: "50%",
                  width: "100vh",
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/selection");
                }}
                whileTap={{ scale: 0.9 }}
              ></motion.div>
            </div>
          </ColStyle>
          <ColStyle></ColStyle>
        </RowWrapper>
      </GridWrapper>
    </Main>
  );
};

export default ExploreContainer;
