import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import store from "./Reducer/store"
import Recent from "./routes/Recent";
import About from "./routes/About"
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="recents" element={<Recent />}></Route>
          <Route path="calculator" element={<App />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

