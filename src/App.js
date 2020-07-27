import React from "react";
import Home from "./Home";
import Todo from "./Todo/todo";
import Calculator from "./calculator/Calculator";
import Movienu from "./moviesnu/Movienu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home exact path="/" />
          </Route>

          <Route path="/calc">
            <Calculator />
          </Route>

          <Route path="/todo">
            <Todo />
          </Route>

          <Route path="/moviesnu">
            <Movienu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
