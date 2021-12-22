import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
let previous =[];
const CalculatoReducer = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    display: (state, action) => {
      let res = state;
      
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
          let prev = { output, state };
          
          
          previous.push(prev);
        } catch (e) {
          output = "Math Error";
          CalculatoReducer.caseReducers.clearScreen();
        }
      }
      
      state = output;
      
      
      console.log("previous: ", previous);
      return state ;
    },
    clearScreen: (state) => {
      state = "";
      return state;
    },
    
    
    
  },
});

export let pre=previous;
export const { display, compute, clearScreen, ViewRecent } = CalculatoReducer.actions;
export const reducer = CalculatoReducer.reducer;
