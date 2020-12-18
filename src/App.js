import React from "react";

import './App.css';
import Header from "./sections/header/Header";
import Sidebar from "./sections/sidebar/Sidebar";
import Main from "./sections/main/Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchPage from "./sections/searchpage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/search/:searchText"> 
              <div className="App__page">
                  <Sidebar />
                  <SearchPage /> 
              </div>
            </Route>
            <Route exact path="/">
              <div className="App__page">
                  <Sidebar />
                  <Main /> 
              </div>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
