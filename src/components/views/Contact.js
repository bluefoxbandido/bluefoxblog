import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h5 className="display-1">
                    <span className="blue">{`(`}</span>
                    <span className="red">{`bluefox`}</span>
                    <span className="blue">{`)`}</span>
                    <span className="white">{`=>`}</span>
                    <span className="blue">{'{'}</span>
                    <span className="red">{`contact`}</span>
                    <span className="blue">{`}`}</span>
                </h5>
                <h6 className="h6">Drop a line!</h6>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Name" />
                    <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingContact" placeholder="Contact Address" />
                    <label for="floatingContact">Contact Address</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" id="floatingMessage" placeholder="...Type your message here." />
                    <label for="floatingMessage">Message</label>
                </div>
            </div>
        )
    }
}
