import { useState } from "react";
import { InputSearch, InputBox, SearchButton } from "./styles";
import { addGitData } from "../../services/slices/gitDataSlice";
import { useDispatch } from "react-redux";
interface SearchProps {}
const Search: React.FunctionComponent<SearchProps> = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (value === "") {
      value = 'q';
    }
    setInputValue(value);
  };
  return (
    <InputBox>
      <InputSearch
        onInput={getInputValue}
        type="text"
        placeholder="Поиск по пользователям"
      />
      <SearchButton
        onClick={() => {
          dispatch(addGitData({ userName: inputValue }));
        }}
      >
        искать
      </SearchButton>
    </InputBox>
  );
};

export default Search;
