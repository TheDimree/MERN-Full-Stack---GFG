import React, { useContext } from 'react'
import { ThemeContext } from './Mycontext'
const Panel = () => {
    const {theme,count}=useContext(ThemeContext);
  return (
    <div style={{...theme}}>
        <p> The counter is {count}</p>
        <p> Important Panel</p>
    </div>
  )
}

export default Panel