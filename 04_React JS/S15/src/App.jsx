import "./App.css";
import Navbar from "./components/nav-bar/Navbar";
import AllCategories from "./components/all-categories/AllCategories";
import Ad from "./components/ad/Ad";
import Footer from "./components/footer/Footer.jsx";
import A from "./components/context-api/A.jsx";
import Nav from "./components/context-api/use-case/Navbar.jsx";
import Main from "./components/context-api/use-case/Main.jsx";
function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
