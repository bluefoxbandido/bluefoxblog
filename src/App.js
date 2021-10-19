import React from "react";

import LeftSidebar from "./components/sections/left_sidebar";
import Middlebar from "./components/sections/middlebar";
import RightSidebar from "./components/sections/right_sidebar";

export default function App() {
  return (
    <div className="app-wrapper bg-secondary container-fluid">  
    <div className="app">
    <LeftSidebar/>
      <Middlebar/>
      <RightSidebar/>
    </div>

    </div>
  );
}