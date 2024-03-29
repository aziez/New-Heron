import styled from "@emotion/styled";
import { IonGrid, IonRow } from "@ionic/react";
import React, { FC, useEffect } from "react";
import { CSSObject } from "@emotion/react";
import useDisableBodyScroll from "../../utils/useDisabledScrolled"; // Assuming you put the hook in a separate file
import Disclaimer from "../Disclaimer/Disclaimer";

interface ISelectionProps {
  children: React.ReactNode;
}

const Cover = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  overflow: "hidden", // Added overflow: hidden
});

const CenteredGrid = styled(IonGrid)({
  textAlign: "center",
  width: "100vw",
  height: "100vh",
});

const CenteredRow = styled(IonRow)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
});

export const SelectionComponent: FC<ISelectionProps> = ({ children }) => {
  useDisableBodyScroll();
  return (
    <Cover>
      <CenteredGrid>
        <CenteredRow>{children}</CenteredRow>
      </CenteredGrid>
      <Disclaimer />
    </Cover>
  );
};
