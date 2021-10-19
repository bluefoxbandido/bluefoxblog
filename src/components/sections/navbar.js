import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar">
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
        </div>
    )
}
