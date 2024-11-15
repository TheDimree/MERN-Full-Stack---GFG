import React from 'react'
import { useSelector } from 'react-redux'

const First = () => {
    const {rate} = useSelector(state => state.counter)
  return (
    <div>
      <h2>Global state changing in this component</h2>
      <p>Price: {rate}</p>
    </div>
  )
}

export default First