import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import MainLayout from './Layout/MainLayout'
import Home from './component/home/Home'

function App() {
  

  return (
   <MainLayout>
      <Routes>
      <Route path='/' element= {<Home />} />
      </Routes>
   </MainLayout>
  )
}

export default App
