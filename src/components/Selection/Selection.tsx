import styled from "@emotion/styled";
import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import { FC } from "react";
import { motion } from "framer-motion";

interface ISelectionProps {}

const MotionCol = styled(motion(IonCol))({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
//   border: "1px solid red",
});

const Images = styled(IonImg)({
  width: "60%",
  height: "auto",
});

export const SelectionComponent: FC<ISelectionProps> = (props) => {
  const Cover = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "gray",
  });

  const CenteredGrid = styled(IonGrid)({
    // backgroundColor: "cyan",
    textAlign: "center",
    width: "100vw",
    height: "100vh",
  });

  const CenteredRow = styled(IonRow)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "blue",
    // border: "1px solid black",
  });

  const handleHover = {
    scale: 1.1,
  };

  return (
    <Cover>
      <CenteredGrid fixed>
        <CenteredRow>
          <MotionCol size="4" whileHover={handleHover}>
            <Images src="T9.png" />
          </MotionCol>
          <MotionCol size="4" whileHover={handleHover}>
            <Images src="T9.png" />
          </MotionCol>
          <MotionCol size="4" whileHover={handleHover}>
            <Images src="T9.png" />
          </MotionCol>
        </CenteredRow>
      </CenteredGrid>
    </Cover>
  );
};
