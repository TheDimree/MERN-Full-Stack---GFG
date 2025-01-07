import React from 'react'
import NavBar from './NavBar'
import {Container} from '@mui/material'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Container>
         <Outlet />
      </Container>
    </>
  )
}

export default Dashboard