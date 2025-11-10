import "./App.css";
import { useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import AllCategories from "./components/all-categories/AllCategories";
import Ad from "./components/ad/Ad";
import Footer from "./components/footer/Footer.jsx";
import A from "./components/context-api/A.jsx";
import Nav from "./components/context-api/use-case/Navbar.jsx";
import Main from "./components/context-api/use-case/Main.jsx";
import loginContext from "./components/context-api/use-case/loginContext.js";
function App() {
  const [state, setState] = useState(false);
  return (
    <div className="app">
      <loginContext.Provider value={{ state, setState }}>
        {state ? <Nav /> : null}
        <Main />
      </loginContext.Provider>
    </div>
  );
}

export default App;
