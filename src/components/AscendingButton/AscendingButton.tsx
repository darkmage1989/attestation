import { useDispatch } from "react-redux";
import { addGitData } from "../../services/slices/gitDataSlice";
import { FilterButton } from "./styles";

interface AscendingProps {
  toggleButtons: (visible: boolean) => void;
}

const Ascending: React.FunctionComponent<AscendingProps> = ({
  toggleButtons,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterButton
        onClick={() => {
          toggleButtons(false);
          dispatch(addGitData({ order: 'asc' }));
        }}
      >
        Возрастанию
      </FilterButton>
    </>
  );
};

export default Ascending;
