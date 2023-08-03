import { createSlice } from "@reduxjs/toolkit";
const gitDataSlice = createSlice({
  name: "gitData",
  initialState: {
    order: "desc",
    userName: "q",
  },
  reducers: {
    addGitData: (state, actions) => {
      if (actions.payload.order) {
        state.order = actions.payload.order;
      }
      if (actions.payload.userName) {
        state.userName = actions.payload.userName;
      }
    },
  },
});
export const { addGitData } = gitDataSlice.actions;
export default gitDataSlice.reducer;
