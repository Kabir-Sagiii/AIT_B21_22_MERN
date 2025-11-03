import "./App.css";
import Navbar from "./components/nav-bar/Navbar";
import AllCategories from "./components/all-categories/AllCategories";
import Ad from "./components/ad/Ad";
import Footer from "./components/footer/Footer.jsx";
import Title from "./components/state/Title.jsx";
import NewTitle from "./components/state/NewTitle.jsx";
import Task1 from "./components/state/Task1.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Task1 />
      <Title />
      <NewTitle />
    </div>
  );
}

export default App;
