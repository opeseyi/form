import { useState } from "react";
import "./App.css";
import FormsOptions from "./components/formsOption/FormOptions";
import Header from "./components/header/header";
import FirstPage from "./components/infoPages/FirstPage";
import SecondPage from "./components/infoPages/SecondPage";
import ThirdPage from "./components/infoPages/ThirdPage";
import FourthPage from "./components/infoPages/FourthPage";

function App() {
  const [firstPage, setFirstPage] = useState(false);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);

  const firstPageHandler = (data) => {
    setFirstPage(data);
    console.log(data);
  };

  const seccondPageHandler = (data) => {
    setSecondPage(data);
    console.log(data);
  };

  const thirdPageHandler = (data) => {
    setThirdPage(data);
    console.log(data);
  };

  const fourthPageHandler = (data) => {
    setFourthPage(data);
    console.log(data);
  };

  return (
    <div className="mx-16 mt-10 h-screen">
      <Header />
      <FormsOptions
        onFirstPage={firstPageHandler}
        onSecondPage={seccondPageHandler}
        onThirdPage={thirdPageHandler}
        onFourthPage={fourthPageHandler}
      />
      {!firstPage && <FirstPage />}
      {!secondPage && <SecondPage />}
      {!thirdPage && <ThirdPage />}
      {!fourthPage && <FourthPage />}
    </div>
  );
}

export default App;
