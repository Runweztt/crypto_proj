import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/Hero';
import Companies from './Components/companies/Companies';
import Pricing from './Components/pricing/Pricing';
import Earning from './Components/earning/Earning';
import Status from './Components/status/Status';
import Subscribe from './Components/subscribe/Subscribe';
import Footer from './Components/footer/Footer';
import TradingViewChart from './Components/tradingview/TradingviewChart';
import Login from './Components/Register/Login';
import Register from './Components/Register/Register';
import Main from './Components/main/Main';
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <TradingViewChart />
      <Pricing />
      <Earning />
      <Status />
      <Subscribe />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
