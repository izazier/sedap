import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-red-600">Sedap</div>
      
      {/* Menu dan Tombol dalam satu wrapper */}
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-2 text-sm">
          <li><a href="#about" className="hover:underline">Tentang</a></li>
          <li><a href="#produk" className="hover:underline">Produk</a></li>
          <li><a href="#testimoni" className="hover:underline">Testimoni</a></li>
        </ul>

        <div className="flex space-x-2 ml-2">
          <Link to="/login" className="text-sm px-3 py-1 border rounded">Login</Link>
          <Link to="/register" className="text-sm px-3 py-1 bg-red-500 text-white rounded">Daftar</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
