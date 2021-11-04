import React, { Component } from "react";
import { useState } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state ={}
    const [blogs, setBlogs] = useState(null);
    
    this.getAllBlogs.bind = this.getAllBlogs
  }


  getAllBlogs(){
    var blogs = []
    fetch("https://bluefoxapi.herokuapp.com/api", {
        method: "get",
        mode: "cors",
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
            setBlogs(data)
        })
  }

  render() {
    return (
      <div className="blog">
        <h5 className="display-1">
          <span className="blue">{`(`}</span>
          <span className="red">{`bluefox`}</span>
          <span className="blue">{`)`}</span>
          <span className="white">{`=>`}</span>
          <span className="blue">{"{"}</span>
          <span className="red">{`blog`}</span>
          <span className="blue">{`}`}</span>
        </h5>
        <h6 className="h6">Blog centered around creative writing.</h6>
        <div className="blog content">

        </div>
      </div>
    );
  }
}
