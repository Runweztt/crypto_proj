import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">

        <Link to="/" className="navbar__logo" onClick={() => setShowNav(false)}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className={`${showNav ? "show" : ""}`}>
          <li onClick={() => setShowNav(false)}>
            <Link to="/product">Product</Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link to="/company">Company</Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className="navbar__btns">
          <Link to="/Login" onClick={() => setShowNav(false)}>Login</Link>
          <Link to="/register" className="btn" onClick={() => setShowNav(false)}>Register</Link>
        </div>

        <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoMdClose /> : <IoMenu />}
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
