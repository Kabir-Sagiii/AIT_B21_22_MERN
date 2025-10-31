import "./App.css";
import Navbar from "./components/nav-bar/Navbar";
import AllCategories from "./components/all-categories/AllCategories";
import Ad from "./components/ad/Ad";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <AllCategories />
      <Ad />
      <Footer />
    </div>
  );
}

export default App;
