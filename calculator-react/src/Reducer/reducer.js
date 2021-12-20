import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
const previous =[];
const CalculatoReducer = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    display: (state, action) => {
      let res = state;
      // console.log("previuos: ", state);
      res = res + action.payload;
      return res;
    },
    compute: (state, action) => {
      let output;
      if (state === "") {
        output = "Enter something";
        setTimeout(() => {
          CalculatoReducer.caseReducers.clearScreen();
        }, 700);
      } else {
        try {
          output = eval(state);
        } catch (e) {
          output = "Invalid Expression!";
          CalculatoReducer.caseReducers.clearScreen();
        }
      }
      let prev = { output,state };
      state = output;
      previous.push(prev);
      console.log("previous: ", previous);
      return state ;
    },
    clearScreen: (state) => {
      state = "";
      return state;
    },
    ViewRecent:(state)=>{
      // state=previous;
      console.log(state);
      return previous;
    }
  },
});
export const { display, compute, clearScreen, ViewRecent } = CalculatoReducer.actions;
export const reducer = CalculatoReducer.reducer;