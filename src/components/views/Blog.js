import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <h5 className="display-1">
                    <span className="blue">{`(`}</span>
                    <span className="red">{`bluefox`}</span>
                    <span className="blue">{`)`}</span>
                    <span className="white">{`=>`}</span>
                    <span className="blue">{'{'}</span>
                    <span className="red">{`blog`}</span>
                    <span className="blue">{`}`}</span>
                </h5>
                <h6 className="h6">Blog centered around creative writing.</h6>
            </div>
        )
    }
}
