// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <header className="navbar">
        <img src="/path-to-logo/logo.png" alt="Aqua Smart Logo" className="logo-navbar" />
        <Link to="/dashboard">Beranda</Link>
        <Link to="/pengguna">Pengguna</Link>
        <Link to="/laporan">Laporan</Link>
        <Link to="/dokumentasi">Dokumentasi</Link>
      </header>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="summary-cards">
          <div className="card">
            <h3>Stok Ikan</h3>
            <p>12.000</p>
          </div>
          <div className="card">
            <h3>Jumlah Kolam</h3>
            <p>25</p>
          </div>
          <div className="card">
            <h3>Pemasukan</h3>
            <p>Rp. 5.000.000</p>
          </div>
          <div className="card">
            <h3>Pengeluaran</h3>
            <p>Rp. 500.000</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src="/path-to-image/fish1.jpg" alt="Ikan" />
          <img src="/path-to-image/fish2.jpg" alt="Ikan" />
        </div>

        {/* Activity Section */}
        <div className="activity-section">
          <div className="activity-card">
            <h4>Hari Ini (2)</h4>
            <p>Panen Ikan Kolam A3, A7 - 08:00</p>
            <p>Pakan Ikan Kolam A4 - 10:00</p>
          </div>
          <div className="activity-card">
            <h4>Besok (1)</h4>
            <p>Pakan Ikan Kolam B1 - 08:00</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Copyright 2024 Aqua Smart</p>
      </footer>
    </div>
  );
};

export default Dashboard;
