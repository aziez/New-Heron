import Denah from "../../components/Denah/Denah";
import MainPages from "../../components/Pages/Page";

const Denah11: React.FC = () => {
  const dataT11 = [
    {
      id: "0",
      nama: "Ardea A",
      url: "denah/L11X19_badan.jpg",
      ket: "nav/L11X19_badan_nav.jpg",
      info: "optional.png",
    },
    {
      id: "1",
      nama: "Ardea B",
      url: "denah/L11X16_badan.jpg",
      ket: "nav/L11X16_badan_nav.jpg",
      info: "optional.png",
    },
  ];

  return (
    <MainPages>
      <Denah dataArray={dataT11} />
    </MainPages>
  );
};

export default Denah11;
