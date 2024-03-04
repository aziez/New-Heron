import styled from "@emotion/styled";
import { IonCol, IonGrid, IonImg, IonRow, useIonRouter } from "@ionic/react";
import { FC } from "react";
import { TargetAndTransition, motion } from "framer-motion";
import useDisableBodyScroll from "../../utils/useDisabledScrolled"; // Assuming you put the hook in a separate file

interface ISelectionProps {
  url: string;
  images: string;
  kupon: string;
}

// ... (previous imports)

export const SelectionCol: FC<ISelectionProps> = ({ url, images, kupon }) => {
  const router = useIonRouter();
  useDisableBodyScroll();

  const MotionCol = styled(motion(IonCol))({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    //   border: "1px solid red",
  });

  const ImageContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const Images = styled(motion(IonImg))({
    width: "60%",
    height: "auto",
    // cursor: "pointer",
  });

  const KuponImage = styled(motion(IonImg))({
    marginTop: "-5%",
    width: "30%",
    cursor: "pointer",
  });

  const handleHover = {
    scale: 1.1,
  };

  const handleClick = (url: string) => {
    console.log("Diklikkkkk", url);
    router.push(url);
  };

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

  return (
    <MotionCol size="4" whileHover={handleHover}>
      <IonCol>
        <ImageContainer>
          <Images
            // whileHover={kuponClickAnimation}
            src={images}
            // onClick={() => handleClick(url)}
          />
          <KuponImage
            whileHover={kuponHoverAnimation}
            whileTap={kuponClickAnimation}
            src={kupon}
            onClick={() => handleClick(url)}
          />{" "}
        </ImageContainer>
      </IonCol>
    </MotionCol>
  );
};
