import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faConciergeBell, faChalkboardTeacher, faBlog } from '@fortawesome/free-solid-svg-icons';

import About from "../views/About";
import Home from "../views/Home";
import Blog from "../views/Blog";
import Contact from "../views/Contact";


export default class Middlebar extends Component {
    render() {
        return (
            <div className="middlebar col-md-9">
                <Router>
                    <Switch className="content">
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
                    <nav class="navbar right-sidebar bg-danger">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active">
                                    <FontAwesomeIcon icon={faHome}/>     
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="active">
                                    <FontAwesomeIcon icon={faChalkboardTeacher}/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeClassName="active">
                                    <FontAwesomeIcon icon={faBlog}/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="active">
                                    <FontAwesomeIcon icon={faConciergeBell}/>
                                </NavLink>
                            </li>
                        </ul>
                        <span className="copyright">{`bf.dev \n 2021`}</span>
                    </nav>
                </Router>
            </div>
        )
    }
}
