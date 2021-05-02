import React from "react";

import Navbar from "./components/Navbar";

import "./App.scss";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <div className="c-App">
      <Navbar />
      <MainLayout />
    </div>
  );
};

export default App;
