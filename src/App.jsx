import { useState } from 'react'

import './App.css'

import Home from './home/Home'
import AppRoutes from './routes';
import React, { useEffect } from 'react';

// import swiper
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
