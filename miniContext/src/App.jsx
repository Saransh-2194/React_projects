import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>Welcome to ContextAPI app!</h1>
      <Login/>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
