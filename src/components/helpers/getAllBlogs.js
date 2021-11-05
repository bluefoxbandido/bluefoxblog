import React, { useState, useEffect } from "react";

const GetAllBlogs = async () => {
  const response = fetch("https://bluefoxapi.herokuapp.com/api", {
    method: "get",
    mode: "cors",
  })
  .then(response => response.json())
  .then(console.log(response))

  return <div>blogs</div>
};
export default GetAllBlogs;