import { IonImg, IonToolbar } from "@ionic/react";
import styled from "@emotion/styled";
import React from "react";

interface Props {}

function Heading(props: Props) {
  const {} = props;

  const StyledToolbar = styled(IonToolbar)`
    position: sticky;
    top: 0;
    z-index: 100;
    overflow: hidden;
    --background: transparent !important;
    --ion-color-base: transparent !important;
  `;

  const StyledImg = styled(IonImg)`
    max-width: 10%;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
  `;

  return (
    <StyledToolbar className="toolbar">
      <StyledImg slot="start" className="logo" src="ss.png" />
      <StyledImg slot="end" className="logo" src="heron.png" />
    </StyledToolbar>
  );
}

export default Heading;
