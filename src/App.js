import React from "react";
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (<Router>
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
  </Router>);
}

export default App;
