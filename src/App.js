import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import "./App.css";
import Trip from "./Component/Trip/Trip";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/route-trip" component={Trip} />
    </Router>
  );
}

export default App;
