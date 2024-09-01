import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
import Profile from './components/Profile.jsx'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='home' element={<Home />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
