import React from 'react'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { UseState } from './components/1.UseState'
import {UseReducer} from './components/2.UseReducer'
import { UseContext } from './components/3.UseContext'
import { ReduxLibrary } from './components/4.Redux'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/use-state' element={<UseState />}/>
        <Route path='/use-reducer' element={<UseReducer />}/>
        <Route path='/use-context' element={<UseContext />}/>
        <Route path='/redux' element={<ReduxLibrary />}/>

      </Routes>
    </>
  )
}
