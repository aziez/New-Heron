import styled from "@emotion/styled";
import { IonText } from "@ionic/react";

interface Props {}

const StyledDisclaimer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 10px;
  text-align: center;
  //   background-color: red;
`;

const StyledText = styled(IonText)({
  fontSize: "9px",
  color: "#c0903797",
  textAlign: "center",
});

function Disclaimer(props: Props) {
  return (
    <StyledDisclaimer>
      <StyledText>
        “Disclaimer: For quality improvement, specifications, and design are
        subject to change without prior notice and are at the full discretion of
        the developer. Illustrations shown are for example purposes only and are
        not part of the buying and selling agreement.”
      </StyledText>
    </StyledDisclaimer>
  );
}

export default Disclaimer;
