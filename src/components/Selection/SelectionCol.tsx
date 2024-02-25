import styled from "@emotion/styled";
import { IonCol, IonGrid, IonImg, IonRow, useIonRouter } from "@ionic/react";
import { FC } from "react";
import { motion } from "framer-motion";
import useDisableBodyScroll from "../../utils/useDisabledScrolled"; // Assuming you put the hook in a separate file


interface ISelectionProps {
  url: string,
  images: string,
}


export const SelectionCol: FC<ISelectionProps> = ({url, images}) => {
  const router = useIonRouter();
  useDisableBodyScroll()

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
  

  const handleHover = {
    scale: 1.1,
  };

  const handleClick = (url: string) => {
    console.log("Diklikkkkk", url);
    router.push(url)


  }
  return (
          <MotionCol size="4" whileHover={handleHover} onClick={() => handleClick(url)}>
            <Images src={images} />
          </MotionCol>
  );
};
