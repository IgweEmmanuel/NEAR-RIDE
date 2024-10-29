import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import Home from './component/home/Home';
import Connect from './connect-wallet/Page';

function App() {
  

  return (
    <>
    <MainLayout>
      <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/connect-wallet' element= {<Connect />} />
      </Routes>
   </MainLayout>
    
  
    
   
    </>
   
  )
}

export default App
