import React, { useEffect, useState } from 'react';
import produkData from '../../assets/produk.json';

const ProdukUnggulan = () => {
  return (
    <section id="produk" className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Produk Unggulan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {produkData.map((produk) => (
          <div key={produk.id} className="bg-white shadow p-4 rounded">
            <img src={produk.gambar} alt={produk.nama} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-bold text-lg">{produk.nama}</h3>
            <p className="text-red-600 font-semibold">Rp{produk.harga}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProdukUnggulan;