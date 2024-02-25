import styled from "@emotion/styled";
import { IonButton, IonImg, IonMenuToggle, useIonRouter } from "@ionic/react";
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
  });

  const EnterButton = styled(IonImg)({
    maxWidth: "15%",
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  });

  return (
    <Main>
      <EnterButton
        src="00enter.png"
        onClick={() => router.push("/selection")}
      />
    </Main>
  );
};

export default ExploreContainer;
