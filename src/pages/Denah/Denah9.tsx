import Denah from "../../components/Denah/Denah";
import MainPages from "../../components/Pages/Page";

const Denah9: React.FC = () => {
  const dataT9 = [
    {
      id: "0",
      nama: "L9X16",
      url: "denah/L9X16_badan.jpg",
      ket: "nav/L9X16_badan_nav.jpg",
    },
    {
      id: "1",
      nama: "L9X19",
      url: "denah/L9X19_badan.jpg",
      ket: "nav/L9X19_badan_nav.jpg",
    },
  ];

  return (
    <MainPages>
      <Denah dataArray={dataT9} />
    </MainPages>
  );
};

export default Denah9;
