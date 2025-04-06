import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// pages 
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Followers from './pages/Followers'
import Following from './pages/Following'
import SeeImage from './pages/SeeImage'
import NotFound from './pages/NotFound'
import SavedPosts from './pages/SavedPosts'
import RandomImage from './pages/RandomImage'
import Store from './pages/Store';

// toaster 
import { Toaster } from 'react-hot-toast'
import RegisterLayout from './layouts/RegisterLayout'

// layouts 
import MainLayout from './layouts/MainLayout'
import Follow from './layouts/Follow'
import AddPost from './pages/AddPost'

// context
import { UserProvider } from "./userContext";

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
          <Route path='saved' element={<SavedPosts />}></Route>
          <Route path='img/:id' element={<SeeImage />}></Route>
          <Route path='random/:id' element={<RandomImage />}></Route>
          <Route path='store' element={<Store />}></Route>

          {/* Not Found Page  */}
          <Route path='*' element={<NotFound />}></Route>
        </Route>

        {/* full page  */}
        <Route path='login' element={<Login />}></Route>

        {/* multi register page  */}
        <Route path='register' element={<RegisterLayout />}></Route>
      </Route>
    )
  )

  return (
    <UserProvider>

      {/* Router  */}
      <RouterProvider router={router} />

      {/* Toaster  */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </UserProvider>
  )
}

export default App