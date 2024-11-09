// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">AQUA SMART</div>
      <ul className="nav-links">
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#pengguna">Pengguna</a></li>
        <li><a href="#laporan">Laporan</a></li>
        <li><a href="#dokumentasi">Dokumentasi</a></li>
      </ul>
      <div className="user-icons">
        <i className="fas fa-user-circle"></i>
        <i className="fas fa-cog"></i>
      </div>
    </nav>
  );
};

export default Navbar;
