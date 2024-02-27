import { FC } from "react";
import MainPages from "../../components/Pages/Page";
import { SelectionComponent } from "../../components/Selection/Selection";
import { SelectionCol } from "../../components/Selection/SelectionCol";
interface ISelectionProps {}

export const Selection: FC<ISelectionProps> = (props) => {
  return (
    <MainPages backgroundUrl="selection.jpg">
      <SelectionComponent>
        <SelectionCol url="/type9" images="T9.png" />
        <SelectionCol url="/type11" images="T11.png" />
        <SelectionCol url="/type11s" images="T11s.png" />
      </SelectionComponent>
    </MainPages>
  );
};
