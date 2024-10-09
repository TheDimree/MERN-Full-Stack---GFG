import React, { useContext } from 'react'
import { ThemeContext } from './Mycontext'

const Nav = () => {
    const {count}=useContext(ThemeContext)
  return (
    <div>
        Count {count>0 && <span> ({count}) </span>}
    </div>
  )
}

export default Nav