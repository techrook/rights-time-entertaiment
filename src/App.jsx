import React from "react";
import AppRoutes from "../router/index"
import Baselayout from "./components/Baselayout";
import "./App.css";

function App() {
  return (
    <Baselayout>
    <AppRoutes />
    </Baselayout>
  );
}

export default App;