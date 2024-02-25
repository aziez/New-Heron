import { FC } from "react";
import MainPages from "../../components/Pages/Page";
import { SelectionComponent } from "../../components/Selection/Selection";
import { SelectionCol } from "../../components/Selection/SelectionCol";
interface ISelectionProps {};

export const Selection: FC<ISelectionProps> = (props) => {
    return (
        <MainPages backgroundUrl="tampak.jpg">
            <SelectionComponent>
                <SelectionCol url="/type/type9" images="T9.png"  />
                <SelectionCol url="/type/type11" images="T11.png"  />
                <SelectionCol url="/type/type11h" images="T11s.png"  />
            </SelectionComponent>
        </MainPages>
    );
}
