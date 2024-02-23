import { IonFab, IonFabButton, IonIcon, IonMenuToggle } from "@ionic/react";
import { colorPalette } from "ionicons/icons";
import * as React from "react";
type Props = {};

function ColorButton(props: Props) {
  return (
    <IonFab slot="fixed" horizontal="end" vertical="bottom">
      <IonMenuToggle>
        <IonFabButton size="small">
          <IonIcon icon={colorPalette}></IonIcon>
        </IonFabButton>
      </IonMenuToggle>
    </IonFab>
  );
}

export default ColorButton;
