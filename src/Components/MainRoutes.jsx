import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import SignIn from '../Pages/SignIn'
import Tasks from '../Pages/Tasks'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<SignIn/>}></Route>
            <Route path="/tasks" element={<Tasks/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes