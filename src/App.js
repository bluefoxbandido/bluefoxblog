import React from "react";
import About from "./components/views/About";
import Home from "./components/views/Home";
import Blog from "./components/views/Blog";
import Contact from "./components/views/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <div>
    <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

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
  );
}