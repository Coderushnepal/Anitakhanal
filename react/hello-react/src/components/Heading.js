import React, { useContext } from 'react'
import { listContext } from './App'

function Heading() {
  const [list] = useContext(listContext);
  return (
    <div>Number of fruits = { list.length}</div>
  )
}

export default Heading;