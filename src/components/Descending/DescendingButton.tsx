import { useDispatch } from "react-redux";
import { addGitData } from "../../services/slices/gitDataSlice";

interface DescendingProps {
  toggleButtons: (visible:boolean) => void;
}

const Descending: React.FunctionComponent<DescendingProps> = ({
  toggleButtons,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          toggleButtons(true);
          dispatch(addGitData({ order: 'desc' }));
        }}
      >
        Убыванию
      </button>
    </>
  );
};

export default Descending;
