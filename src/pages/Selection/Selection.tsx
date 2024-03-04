import { FC } from "react";
import MainPages from "../../components/Pages/Page";
import { SelectionComponent } from "../../components/Selection/Selection";
import { SelectionCol } from "../../components/Selection/SelectionCol";
interface ISelectionProps {}

export const Selection: FC<ISelectionProps> = (props) => {
  return (
    <MainPages backgroundUrl="bg_marble.jpg">
      <SelectionComponent>
        <SelectionCol
          url="/type11s"
          images="ardea_11_hoek.png"
          kupon="icon/T11s.png"
        />
        <SelectionCol
          url="/type11"
          images="ardea_11.png"
          kupon="icon/T11.png"
        />
        <SelectionCol url="/type9" images="ardea_9.png" kupon="icon/T9.png" />
      </SelectionComponent>
    </MainPages>
  );
};
