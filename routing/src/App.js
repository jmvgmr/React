import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./itemDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
