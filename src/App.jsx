import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/hero/Hero"
import Companies from "./Components/companies/Companies";
import Pricing from './Components/pricing/Pricing';
import Earning from './Components/earning/Earning';
import Status from './Components/status/Status';
import Subscribe from "./Components/subscribe/Subscribe"
import Footer from './Components/footer/Footer';
import './App.css'
import TradingViewChart from './Components/tradingview/TradingviewChart';

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Companies/>
       <TradingViewChart/>
      <Pricing/>
     
      <Earning/>
      <Status/>
      <Subscribe/>
      <Footer/>

    </>
  )
}

export default App
