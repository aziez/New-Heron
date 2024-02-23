// @flow
import styled from "@emotion/styled";
import { IonButton, IonLabel, IonMenu } from "@ionic/react";
import * as React from "react";
import { css } from "@emotion/react";

import "./style.css";

type Props = {};
export const ColorMenu = (props: Props) => {
  return (
    <IonMenu
      contentId="color-content"
      side="start"
      type="overlay"
      swipeGesture={false}>
      <div className="pilih">
        <IonButton size="small" mode="md" id={"id"}>
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
        </IonButton>
      </div>
    </IonMenu>
  );
};
