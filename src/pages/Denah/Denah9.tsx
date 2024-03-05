import { IonImg } from "@ionic/react";
import Denah from "../../components/Denah/Denah";
import MainPages from "../../components/Pages/Page";

const Denah9: React.FC = () => {
  const dataT9 = [
    {
      id: "0",
      nama: "Ardea C",
      url: "denah/L9X19_badan.jpg",
      ket: "nav/L9X19_badan_nav.jpg",

      info: "the_position.png",
    },
    {
      id: "1",
      nama: "Ardea D",
      url: "denah/L9X16_badan.jpg",
      ket: "nav/L9X16_badan_nav.jpg",
      info: "the_position.png",
    },
  ];

  return (
    <MainPages>
      <Denah dataArray={dataT9} disclaimer />
    </MainPages>
  );
};

export default Denah9;
