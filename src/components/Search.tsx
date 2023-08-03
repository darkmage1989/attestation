import { useState } from "react";
import { InputBox } from "./styles";
import { addGitData } from "../services/slices/gitDataSlice";
import { useDispatch } from "react-redux";
interface SearchProps {}
const Search: React.FunctionComponent<SearchProps> = () => {
    const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');
  const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value)  
  };
  return (
    <InputBox>
      <input onInput={getInputValue} name="input" type="text" />
      <button onClick={()=> {dispatch(addGitData({ userName: inputValue }));}}>искать</button>
    </InputBox>
  );
};

export default Search;
