import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// pages 
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePassword from "./pages/CreatePassword"
import Bio from './pages/Bio'
import FinishLogin from './pages/FinishLogin'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Followers from './pages/Followers'
import Following from './pages/Following'

// toaster 
import { Toaster } from 'react-hot-toast'
import RegisterLayout from './layouts/RegisterLayout'

// layouts 
import MainLayout from './layouts/MainLayout'
import Follow from './layouts/Follow'
import AddPost from './pages/AddPost'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<MainLayout />}>

          {/* Sidebar  */}
          <Route index element={<Home />}></Route>
          <Route path='/profile' element={<Profile />} ></Route>
          <Route path='f' element={<Follow />}>
            <Route index element={<Followers />}></Route>
            <Route path='following' element={<Following />}></Route>
          </Route>
          <Route path='add-post' element={<AddPost />}></Route>
        </Route>

        {/* full page  */}
        <Route path='login' element={<Login />}></Route>
        {/* <Route path='register' element={<Register />}></Route> */}
        <Route path='create-password' element={<CreatePassword />}></Route>
        <Route path='bio' element={<Bio />} ></Route>
        <Route path='finish-login' element={<FinishLogin />} ></Route>

        {/* multi register page  */}
        <Route path='register' element={<RegisterLayout />}></Route>
      </Route>
    )
  )

  return (
    <>
      {/* Router  */}
      <RouterProvider router={router} />

      {/* Toaster  */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App