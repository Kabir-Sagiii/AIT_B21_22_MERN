import "./App.css";
import { useState } from "react";
import Navbar from "./components/nav-bar/Navbar";

import AllCategories from "./components/all-categories/AllCategories";
import Ad from "./components/ad/Ad";
import Footer from "./components/footer/Footer.jsx";

import UserList from "./components/map/UserList.jsx";
import Users from "./components/map/Users.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Users />
    </div>
  );
}

export default App;
