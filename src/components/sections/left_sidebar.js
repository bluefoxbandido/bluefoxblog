import React, { Component } from 'react'

export default class LeftSidebar extends Component {
    render() {
        return (
            <div className="left-sidebar col-md-3">
                <div className="logo">
                   <img src="../../assets/Blue Fox Blog(1).png" width="80%"/>
                </div>
                <div className="coolLanguageArea">
                    <p>
                        <span>Nature's first green is gold,</span>
                        <span>Her hardest hue to hold.</span>
                        <span>Her early leaf's a flower;</span>
                        <span>But only so an hour.</span>
                        <span>Then leaf subsides to leaf.</span>
                        <span>So Eden sank to grief,</span>
                        <span>So dawn goes down to day.</span>
                        <span>Nothing gold can stay.</span>
                        
                        <span className="author">-Robert Frost</span>
                    </p>
                </div>
                <div className="contactLinks">
                    <a href="https://www.linkedin.com/in/adam-parker-developer/" className="bg-danger">LinkedIn</a>
                    <a href="https://account.xbox.com/en-us/profile?gamertag=BlueFoxZero1145" className="bg-success">Xbox</a>
                    <a href="https://github.com/bluefoxbandido/" className="bg-dark">Github</a>
                    <a href="https://www.facebook.com/profile.php?id=100073988864209" className="bg-primary">Facebook</a>
                </div>
            </div>
        )
    }
}
