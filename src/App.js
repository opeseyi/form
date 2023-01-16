import { useState } from "react";
import "./App.css";
import FormsOptions from "./components/formsOption/FormOptions";
import Header from "./components/header/header";
import FirstPage from "./components/infoPages/FirstPage";
import SecondPage from "./components/infoPages/SecondPage";
import ThirdPage from "./components/infoPages/ThirdPage";
import FourthPage from "./components/infoPages/FourthPage";

function App() {
  return (
    <div className="mx-16 mt-10 h-screen">
      <Header />
      <FormsOptions />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}

export default App;
