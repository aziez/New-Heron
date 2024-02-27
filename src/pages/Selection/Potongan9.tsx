import React, { useEffect } from "react";
import FullScreenHtmlEmbed from "../../components/Embbed/Embbed";
import FabList from "../../components/FabList/FabList";
import MainPages from "../../components/Pages/Page";
import Type from "../../components/Type/Type";
import useDisableBodyScroll from "../../utils/useDisabledScrolled"; // Assuming you put the hook in a separate file


type Props = {};
function Potongan9(props: Props) {  
  useDisableBodyScroll();
  return (
    <MainPages>
      {/* <Type /> */}
      <FullScreenHtmlEmbed htmlFile="main/T9/index.html" />
      <FabList kisi="/type/type9" denah="/denah/denah9"  />
    </MainPages>
  );
}

export default Potongan9;
