import styled from "@emotion/styled";
import { IonCol, IonGrid, IonRow, useIonRouter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const router = useIonRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controls = useAnimation();
  const audio = new Audio("audio.mp3");

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

    setTimeout(() => {
      router.push("/selection");
    }, 1000);
  };

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

  return (
    <Main animate={controls} initial={{ opacity: 1 }}>
      <GridWrapper>
        <RowWrapper>
          <ColStyle size="auto">
            <div
              style={{
                width: "calc(100vw - 60vw)",
                height: "100vh",
                // backgroundColor: "red",
                // position: "relative",
                // backgroundColor: "red",
              }}
            >
              <motion.div
                style={{
                  // backgroundColor: "#fffff",
                  // border: "5px solid blue",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  height: "50%",
                  width: "100vh",
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toggleFullscreen();
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
