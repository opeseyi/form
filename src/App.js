import "./App.css";
import FormsOptions from "./components/formsOption/FormOptions";
import Header from "./components/header/header";
import FirstPage from "./components/infoPages/FirstPage";

function App() {
  return (
    <div className="mx-16 mt-10 h-screen">
      <Header />
      <FormsOptions />
      <FirstPage />
    </div>
  );
}

export default App;
