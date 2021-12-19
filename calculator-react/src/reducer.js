import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const addTodoReducer = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    display: (state, action) => {
      let res = state;
      console.log("previuos: ", state);
      res = res + action.payload;
      return res;
    },
    compute: (state, action) => {
      let output;
      if (state === "") {
        output = "Enter something";
        setTimeout(() => {
          addTodoReducer.caseReducers.clearScreen();
        }, 700);
      } else {
        try {
          output = eval(state);
        } catch (e) {
          output = "Invalid Expression!";
          addTodoReducer.caseReducers.clearScreen();
        }
      }
      state = output;
      console.log("ans: ", state);
      return state;
    },
    clearScreen: (state, action) => {
      state = "";
      return state;
    },
  },
});
export const { display, compute, clearScreen } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
