import { useDispatch } from "react-redux";
import { addGitData } from "../../services/slices/gitDataSlice";
import { FilterButton } from "./styles";

interface DescendingProps {
  toggleButtons: (visible: boolean) => void;
}

const Descending: React.FunctionComponent<DescendingProps> = ({
  toggleButtons,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterButton
        onClick={() => {
          toggleButtons(true);
          dispatch(addGitData({ order: "desc" }));
        }}
      >
        Убыванию
      </FilterButton>
    </>
  );
};

export default Descending;
