import { useDispatch } from "react-redux";
import { addGitData } from "../../services/slices/gitDataSlice";
import { FilterButton } from "./styles";

interface AscendingProps {
  toggleButtons: (visible: boolean) => void;
}

const Ascending: React.FunctionComponent<AscendingProps> = ({ //компонент кнопки возрастания
  toggleButtons,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterButton
        onClick={() => {
          toggleButtons(false); //прокидываю состояние 
          dispatch(addGitData({ order: 'asc' })); //отправляю в слайс
        }}
      >
        Возрастанию
      </FilterButton>
    </>
  );
};

export default Ascending;
