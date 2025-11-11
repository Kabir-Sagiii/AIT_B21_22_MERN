import "./App.css";
import { useState } from "react";
import Navbar from "./components/nav-bar/Navbar";

import AllCategories from "./components/all-categories/AllCategories";
import Ad from "./components/ad/Ad";
import Footer from "./components/footer/Footer.jsx";
import Datarendering from "./components/list-data-rendering/Datarendering.jsx";
import JSXElementInArray from "./components/list-data-rendering/JSXElementInArray.jsx";
import List from "./components/list-data-rendering/List.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <List />
    </div>
  );
}

export default App;
