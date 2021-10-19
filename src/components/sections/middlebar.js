import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import About from "../views/About";
  import Home from "../views/Home";
  import Blog from "../views/Blog";
  import Contact from "../views/Contact";

export default class Middlebar extends Component {
    render() {
        return (
            <div className="middlebar col-md-7">
                <Router>
                    <Switch>
                        <Route path="/about">
                        <About />
                        </Route>
                        <Route path="/contact">
                        <Contact />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/">
                        <Home />
                        </Route>
                    </Switch>
                </Router>        
            </div>
        )
    }
}
