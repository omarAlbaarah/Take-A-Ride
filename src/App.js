import {useState} from "react";
import './App.scss';
import Intro from "./components/Intro/Intro";
import ContactForm from "./components/Contact/ContactForm";
import TopBar from "./components/Topbar/Topbar";
import OurCars from './components/OurCars/OurCars';
import Menu from './components/Menu/Menu';
import Toast from "./components/Shared/Toast";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <OurCars/>
        <ContactForm/>
        <AboutUs/>
      </div>
      <Toast/>
    </div>
  );
}

export default App;
