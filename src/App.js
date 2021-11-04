import React, { Component } from 'react';
import LeftSidebar from "./components/sections/left_sidebar";
import Middlebar from "./components/sections/middlebar";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper bg-dark container-fluid">  
      <div className="app">
      <LeftSidebar/>
      <Middlebar/>
      </div>
  
      </div>
    );
  }
}
