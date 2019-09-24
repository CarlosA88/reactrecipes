import React, { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import About from "./About/About.jsx";
import Home from "./Home/Home.jsx";
import Navbar from "./Common/Navbar.jsx";
import Header from "./Common/Header.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      
        <div className="container">

        <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
