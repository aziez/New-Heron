import React from "react";
import FullScreenHtmlEmbed from "../../components/Embbed/Embbed";
import FabList from "../../components/FabList/FabList";
import MainPages from "../../components/Pages/Page";
import Type from "../../components/Type/Type";

type Props = {};
function Type11(props: Props) {
  return (
    <MainPages>
      <FullScreenHtmlEmbed htmlFile="T11/index.html" />
    <FabList kisi="/kisi" denah="/denah"/>
  </MainPages>
  );
}

export default Type11;
