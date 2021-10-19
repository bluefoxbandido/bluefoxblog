import React, { Component } from 'react'
import Navbar from './navbar'

export default class RightSidebar extends Component {
    render() {
        return (
            <div className="right-sidebar bg-primary col-md-2">
                <Navbar/>
            </div>
        )
    }
}
