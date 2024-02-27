import Denah from "../../components/Denah/Denah";
import MainPages from "../../components/Pages/Page";

const Denah9: React.FC = () => {
  const dataT9 = [
    {
      id: "0",
      nama: "Deluxe",
      url: "denah/L9x16 badan.jpg",
      ket: "bendera/9X16-pre.png",
    },
    {
      id: "1",
      nama: "Premium 1",
      url: "denah/L9x19 badan.jpg",
      ket: "bendera/9X16-std.png",
    },
  ];

  return (
    <MainPages>
      <Denah dataArray={dataT9} />
    </MainPages>
  );
};

export default Denah9;
