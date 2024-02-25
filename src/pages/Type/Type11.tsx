import React from "react";
import FabList from "../../components/FabList/FabList";
import MainPages from "../../components/Pages/Page";
import Type from "../../components/Type/Type";

type Props = {};
function Type11(props: Props) {
  return (
    <MainPages>
    <Type />
    <FabList kisi="/kisi" denah="/denah"/>
  </MainPages>
  );
}

export default Type11;
