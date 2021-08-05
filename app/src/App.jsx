import React, { Component } from "react";
import "./assets/style.css";
import HomePage from './components/HomePage';
import Header from "./components/Header";

class App extends Component {
  state = {
    isDark: true,
  };
  setAppState = (obj) => {
    this.setState(obj);
  };
  render() {
    return (
      <>
        <Header setAppState={this.setAppState} {...this.state} />
        <HomePage {...this.state} />
      </>
    );
  }
}

export default App;
