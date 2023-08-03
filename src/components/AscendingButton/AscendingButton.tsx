import { useDispatch } from "react-redux";
import { addGitData } from "../../services/slices/gitDataSlice";

interface AscendingProps {
  toggleButtons: (visible: boolean) => void;
}

const Ascending: React.FunctionComponent<AscendingProps> = ({
  toggleButtons,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          toggleButtons(false);
          dispatch(addGitData({ order: 'asc' }));
        }}
      >
        Возрастанию
      </button>
    </>
  );
};

export default Ascending;
