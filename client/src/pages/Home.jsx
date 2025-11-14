import React from 'react'
import { Navbar } from '../component/navbar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet/>
    </div>
  )
}
