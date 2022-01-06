import TopBar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import './App.scss';
import Menu from './components/Menu/Menu';
import {useState} from "react";
import Map from './components/Map/Map';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Map/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
