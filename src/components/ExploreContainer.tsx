import styled from "@emotion/styled";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const router = useIonRouter();

  const Main = styled.div({
    position: "relative",
    textAlign: "center",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  });

  const GridWrapper = styled(IonGrid)({
    height: "100%",
    // backgroundColor: "black", // Make IonGrid full height
  });

  const RowWrapper = styled(IonRow)({
    height: "100%", // Make IonRow full height
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
    // border: "solid 1px black",
    // backgroundColor: "red",
  });

  const EnterButton = styled(IonImg)({
    // maxWidth: "15%",
    // position: "absolute",
    // bottom: "1rem", // Adjust the distance from the bottom as needed
    // left: "50%",
    // transform: "translateX(-50%)",
    zIndex: 1,
  });

  return (
    <Main>
      <GridWrapper>
        <RowWrapper>
          <ColStyle size="auto">
            <div
              style={{
                width: "250px",
                height: "100vh",
                position: "relative",
                // backgroundColor: "red",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  // backgroundColor: "red",
                  height: "120px",
                  width: "100vh",
                  transform: "translateX(-50%)",
                }}
                onClick={() => {
                  router.push("/selection");
                }}
              ></div>
            </div>
          </ColStyle>
          <ColStyle></ColStyle>
        </RowWrapper>
      </GridWrapper>
    </Main>
  );
};

export default ExploreContainer;
