import React from 'react';
import './Header.css';
import logo from './eos-logo.gif';


const Header = () => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <h1 className="title">EOS</h1>
    <span className="subtitle">LATEST</span>
    <span className="subtitle">BLOCKS</span>
  </header>
);

export default Header;
