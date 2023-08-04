import { createSlice } from "@reduxjs/toolkit";
const gitDataSlice = createSlice({
  name: "gitData",
  initialState: {
    order: "desc", 
    userName: "q",
    gitData: [],
  },
  reducers: {
    addGitData: (state, actions) => {
      if (actions.payload.order) {
        state.order = actions.payload.order; // используется для хранения значения типа сортировки
      }
      if (actions.payload.userName) {
        state.userName = actions.payload.userName; // используется для хранения юзера для запроса 
      }
      if (actions.payload.gitData) {
        state.gitData = actions.payload.gitData; // используется для локального хранения массива данных из запроса
      }
    },
  },
});
export const { addGitData } = gitDataSlice.actions;
export default gitDataSlice.reducer;
