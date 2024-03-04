import Denah from "../../components/Denah/Denah";
import MainPages from "../../components/Pages/Page";

const Denah11s: React.FC = () => {
  const dataT11 = [
    {
      id: "0",
      nama: "L11X16 Sudut",
      url: "denah/L11X16_sudut.jpg",
      ket: "nav/L11X16_sudut_nav.jpg",
    },
    {
      id: "1",
      nama: "L11X19 Sudut",
      url: "denah/L11X19_sudut.jpg",
      ket: "nav/L11X19_sudut_nav.jpg",
    },
  ];

  return (
    <MainPages>
      <Denah dataArray={dataT11} />
    </MainPages>
  );
};

export default Denah11s;
