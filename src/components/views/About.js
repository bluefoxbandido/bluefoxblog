import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h5 className="display-1">
                    <span className="blue">{`(`}</span>
                    <span className="red">{`bluefox`}</span>
                    <span className="blue">{`)`}</span>
                    <span className="white">{`=>`}</span>
                    <span className="blue">{'{'}</span>
                    <span className="red">{`about`}</span>
                    <span className="blue">{`}`}</span>
                </h5>
                <h6 className="h6">About the Developer</h6>
                <div className="bio">
                    
                </div>
            </div>
        )
    }
}
