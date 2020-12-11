import React from "react";

import './App.css';
import Header from "./sections/header/Header";
import Sidebar from "./sections/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__page">
      <Sidebar />
      {/* Recommended Video */}
      </div>
      
    </div>
  );
}

export default App;
