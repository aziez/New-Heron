// @flow
import styled from "@emotion/styled";
import {
  IonButton,
  IonLabel,
  IonMenu,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import * as React from "react";

import "./style.css";

type Props = {};
export const PotonganMenu = (props: Props) => {
  return (
    <div className="pilih ripple-effect">
      <IonSegment
        value={"facade"}
        mode={"ios"}
        color="primary"
        className="potongan"
      >
        <IonSegmentButton value="facade" id="facade">
          <IonLabel>Facade</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="3rd" id="skydeck">
          <IonLabel>3rd</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="2nd" id="2nd">
          <IonLabel>2nd</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="1st" id="1st">
          <IonLabel>1st</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {/* <IonButton size="small" mode="md" id={"id"}>
          <IonLabel>1</IonLabel>
        </IonButton>
        <IonButton size="small" mode="md" id={"id"}>
          <IonLabel>2</IonLabel>
        </IonButton>
        <IonButton size="small" mode="md" id={"id"}>
          <IonLabel>3</IonLabel>
        </IonButton>
        <IonButton size="small" mode="md" id={"id"}>
          <IonLabel>4</IonLabel>
        </IonButton> */}
    </div>
  );
};
