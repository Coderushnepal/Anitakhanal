// import React, { useContext } from 'react'
// import { listContext } from './App'
import React from "react";
import { useSelector } from "react-redux";
function Heading() {
  // const [list] = useContext(listContext);
const list = useSelector((state) => state.list);
  return (
    <div>Number of fruits = { list.length}</div>
  )
}

export default Heading;