import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/hero/Hero"
import Companies from "./Components/companies/Companies"; // ✅ This works if Companies.jsx has a default export



import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Companies/>

    </>
  )
}

export default App
