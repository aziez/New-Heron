
  import Denah from "../../components/Denah/Denah";
import MainPages from "../../components/Pages/Page";
  
  const Denah9: React.FC = () => {
    const dataT9 = [
        {
          id: "0",
          nama: "Deluxe",
          url: "denah/9X16-pre.jpg",
          ket: "bendera/9X16-pre.jpg",
        },
        {
          id: "1",
          nama: "Premium 1",
          url: "denah/9X16-std.jpg",
          ket: "bendera/9X16-std.jpg",
        },
        {
          id: "2",
          nama: "Premium 2",
          url: "denah/9X19-pre.jpg",
          ket: "bendera/9X19-pre.jpg",
        },
        {
          id: "3",
          nama: "Premium 3",
          url: "denah/9X19-std.jpg",
          ket: "bendera/9X19-std.jpg",
        },
      ];


    return (
      <MainPages backgroundUrl="gate-l_new.jpg">
        <Denah dataArray={dataT9} />
      </MainPages>
    );
  };
  
  export default Denah9;
  