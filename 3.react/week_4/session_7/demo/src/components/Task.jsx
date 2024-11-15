import React, { useContext } from 'react'
import { ThemeContext } from './Mycontext'
const Task = () => {
    const {updateTheme,increment}=useContext(ThemeContext)
  return (
    <div>
        <button onClick={updateTheme}> Change Theme</button>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Task