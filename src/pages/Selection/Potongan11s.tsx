import React, { useEffect } from "react";
import FullScreenHtmlEmbed from "../../components/Embbed/Embbed";
import FabList from "../../components/FabList/FabList";
import MainPages from "../../components/Pages/Page";
import Type from "../../components/Type/Type";
import useDisableBodyScroll from "../../utils/useDisabledScrolled"; // Assuming you put the hook in a separate file


type Props = {};
function Potongan11S(props: Props) {  
  useDisableBodyScroll();
  return (
    <MainPages>
      {/* <Type /> */}
      <FullScreenHtmlEmbed htmlFile="main/T11S/index.html" />
      <FabList kisi="/type/type11s" denah="/denah/denah11s"  />
    </MainPages>
  );
}

export default Potongan11S;
