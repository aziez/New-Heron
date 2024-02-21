import { FC } from "react";
import MainPages from "../../components/Pages/Page";
import { SelectionComponent } from "../../components/Selection/Selection";
interface ISelectionProps {};

export const Selection: FC<ISelectionProps> = (props) => {
    return (
        <MainPages backgroundUrl="tampak.jpg">
            <SelectionComponent />
        </MainPages>
    );
}
