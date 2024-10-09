import React, { createContext, useState } from 'react'
import Task from './Task';
import Panel from './Panel';
import Nav from './Nav';
const themes={
    light:{
        color:'black',
        backgroundColor:'white'
    },
    dark:{
        color:'white',
        backgroundColor:'black'
    },
}
//create context 
export const ThemeContext=createContext(themes.light);
const Mycontext = () => {
    const [theme,setTheme]=useState(themes.light);
    const [count,setCount]=useState(0);
    const updateTheme=()=>{
        setTheme((t)=> (t===themes.light ? themes.dark : themes.light))
    }
    const increment=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <ThemeContext.Provider value={{theme:theme ,updateTheme:updateTheme,count:count,increment:increment}}>
           <h2> Context API Example</h2>
           <Nav />
           <hr/>
           <Task />
           <hr/>
           <Panel />
        </ThemeContext.Provider>
    </div>
  )
}

export default Mycontext