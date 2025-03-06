import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// pages 
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePassword from "./pages/CreatePassword"
import Bio from './pages/Bio'
import FinishLogin from './pages/FinishLogin'

// toaster 
import { Toaster } from 'react-hot-toast'

// layouts 
import MainLayout from './layouts/MainLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<MainLayout />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/create-password' element={<CreatePassword />}></Route>
        <Route path='/bio' element={<Bio />} ></Route>
        <Route path='/finish-login' element={<FinishLogin />} ></Route>
      </Route>
    )
  )

  return (
    <>
      {/* Router  */}
      <RouterProvider router={router} />

      {/* Toaster  */}
      <Toaster />
    </>
  )
}

export default App