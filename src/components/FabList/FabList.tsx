import styled from "@emotion/styled";
import {
  IonButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonImg,
  IonMenuToggle,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { menu, layersOutline } from "ionicons/icons";

interface FablistProps {
  kisi: string;
  denah: string;
}

const GrayIonIcon = styled(IonIcon)`
  color: white;
`;

const FabList: React.FC<FablistProps> = ({ kisi, denah }) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton size="small">
        <GrayIonIcon icon={menu} />
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton routerLink={denah}>
          <GrayIonIcon src="plan.svg" />
        </IonFabButton>
      </IonFabList>
      <IonFabList side="start">
        <IonFabButton routerLink={kisi}>
          <GrayIonIcon icon={layersOutline} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default FabList;
