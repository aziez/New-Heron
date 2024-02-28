import { IonFab, IonFabButton, IonIcon, IonImg, IonToolbar, useIonRouter } from "@ionic/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {chevronBack} from "ionicons/icons"

interface Props {}

function Heading(props: Props) {
  const {} = props;
  const router = useIonRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(router.routeInfo.pathname);
  },[])

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

  const handleBack = () => {
    router.goBack();
  }

  return (
    <>
    <StyledToolbar className="toolbar">
      <StyledImg slot="start" className="logo" src="ss.png" />
      <StyledImg slot="end" className="logo" src="ardea.png" />
    </StyledToolbar>
      {path !== "/home" && 
    <IonFab onClick={handleBack} vertical="bottom" horizontal="start" slot="fixed">
      <IonFabButton size="small">
      <IonIcon icon={chevronBack} />
      </IonFabButton>
      </IonFab>
      }
    </>
  );
}

export default Heading;
