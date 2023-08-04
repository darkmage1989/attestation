import { useDispatch } from "react-redux";
import { addGitData } from "../../services/slices/gitDataSlice";
import { FilterButton } from "./styles";

interface DescendingProps {
  toggleButtons: (visible: boolean) => void;
}

const Descending: React.FunctionComponent<DescendingProps> = ({ //компонент кнопки убывания
  toggleButtons,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterButton
        onClick={() => {
          toggleButtons(true); //прокидываю состояние 
          dispatch(addGitData({ order: "desc" })); //отправляю в слайс
        }}
      >
        Убыванию
      </FilterButton>
    </>
  );
};

export default Descending;
