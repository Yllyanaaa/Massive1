// src/components/Dokumentasi.js
import React from 'react';
import './Dokumentasi.css';
import sampleImage from '../assets/dokumentasi.jpg'; // Ganti dengan path gambar yang benar

const Dokumentasi = () => {
  const data = [
    { id: 1, nama: 'Lorem Ipsum', keterangan: 'Lorem ipsum', tanggal: '00/00/0000', foto: sampleImage },
    { id: 2, nama: 'Lorem Ipsum', keterangan: 'Lorem ipsum', tanggal: '00/00/0000', foto: sampleImage },
    { id: 3, nama: 'Lorem Ipsum', keterangan: 'Lorem ipsum', tanggal: '00/00/0000', foto: sampleImage },
    { id: 4, nama: 'Lorem Ipsum', keterangan: 'Lorem ipsum', tanggal: '00/00/0000', foto: sampleImage },
  ];

  return (
    <div className="dokumentasi-container">
      <h2>Dokumentasi Kegiatan</h2>
      <div className="dokumentasi-table-container">
        <table className="dokumentasi-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Foto Dokumentasi</th>
              <th>Nama Kegiatan</th>
              <th>Keterangan</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}.</td>
                <td><img src={item.foto} alt="Dokumentasi" className="dokumentasi-image" /></td>
                <td>{item.nama}</td>
                <td>{item.keterangan}</td>
                <td>{item.tanggal}</td>
                <td>
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-button">+</button>
    </div>
  );
};

export default Dokumentasi;
