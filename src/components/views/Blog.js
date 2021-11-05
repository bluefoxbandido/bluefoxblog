import React, { Component, useEffect, useState } from "react";
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = () => {
        axios
            .get('https://bluefoxapi.herokuapp.com/api')
            .then((res) => {
                setBlogs(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

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
              <div className="blog-container">
                  {blogs.map(blog => 
                      <div className="blog" key={blog._id}>
                          <h2>{blog.title}</h2>
                          <h4>{blog.date}</h4>
                          <p>{blog.blogBody}</p>
                      </div>
                  )}
              </div>
          </div>
        </div>
      );
}

export default Blog