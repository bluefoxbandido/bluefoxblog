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
                        ;alkjd;flakjsdl;kfj;alksdjf;lakjsd;lfkj
                        a;lkdjf;alksjdf;lakjsdflkjas;ldkjf;alksjdf
                        a;'lkjsdf'lakjsdf'lakjsdfl'kjas'dfklja'slkjdf
                        ;alskjdf'alkjsdf'alkjsdf'lkajsdfjkla'lskdj
                    </p>
                </div>
                <div className="contactLinks">
                    <a href="#" className="bg-danger">link at link dot link</a>
                    <a href="#" className="bg-success">link at link dot link</a>
                    <a href="#" className="bg-dark">link at link dot link</a>
                    <a href="#" className="bg-primary">link at link dot link</a>
                </div>
            </div>
        )
    }
}
