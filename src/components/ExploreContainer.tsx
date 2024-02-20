import styled from "@emotion/styled";
import { IonImg } from "@ionic/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const Main = styled.div({
    position: "relative",
    textAlign: "center",
    width: "100vw",
    height: "100vh",
    // backgroundColor: "red",
  });

  const EnterButton = styled(IonImg)({
    maxWidth: "12%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  });

  const [isClick, setIsClick] = useState(true);

  const isClicked = () => {
    console.log("BUTTON CLICKEDDDD");
  };

  return (
    <Main>
      <EnterButton src="00enter.png" onClick={isClicked} />
    </Main>
  );
};

export default ExploreContainer;
