import React from "react";
import { BrowserRouter } from "react-router-dom";

//import "./App.css";
import Routes from "./routes/Routes";

const App = props => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};

export default App;
