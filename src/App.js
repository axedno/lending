
import './App.scss';
import Header from "./components/Header";
import Map from "./components/Map";
import Benefits from "./components/Benefits";
import MainBlock from "./components/MainBlock";
import HowUse from "./components/HowUse";
import Management from "./components/Management";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Map/>
      <Benefits/>
      <MainBlock/>
      <HowUse/>
      <Management/>
      <Footer/>
    </div>
  );
}

export default App;
