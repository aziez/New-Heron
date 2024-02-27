import React from "react";
import FullScreenHtmlEmbed from "../../components/Embbed/Embbed";
import FabList from "../../components/FabList/FabList";
import MainPages from "../../components/Pages/Page";
import { PotonganMenu } from "../../components/PotonganMenu/PotonganMenu";
import Type from "../../components/Type/Type";

type Props = {};
function Type11s(props: Props) {
  return (
    <MainPages>
      <PotonganMenu />
      <FullScreenHtmlEmbed htmlFile="T11S/index.html" />
    {/* <FabList kisi="kisi" denah="/denah/denah11s"/> */}
  </MainPages>
  );
}

export default Type11s;
