import React, { useState } from 'react';
import products from '../assets/Products.json';

export default function ProductCheck() {
  const [kode, setKode] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (kode.length < 4) {
      setResult({ error: 'Minimal 4 karakter.' });
      return;
    }
    const found = products.find((p) => p.kode_produk === kode);
    if (!found) return setResult({ notfound: true });
    if (found.stok <= 0) return setResult({ habis: true, ...found });
    setResult(found);
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Cek Ketersediaan Produk</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          placeholder="Masukkan kode produk..."
          className="w-full border px-4 py-2 rounded"
        />
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded">Cek</button>
      </form>
      {result?.error && <p className="text-red-500"> {result.error}</p>}
      {result?.notfound && <p className="text-red-500"> Kode produk tidak ditemukan.</p>}
      {result?.habis && (
        <div className="text-yellow-600">
          <p>⚠️ Produk {result.nama_produk} saat ini sedang habis.</p>
          <img src="https://source.unsplash.com/200x200/?outofstock" alt="Out of Stock" className="mt-2 rounded" />
        </div>
      )}
      {result && !result.error && !result.notfound && !result.habis && (
        <div className="text-green-700">
          <p>Produk {result.nama_produk} tersedia dengan harga Rp{result.harga}.</p>
          <p>Stok tersedia: {result.stok}</p>
          <img src="https://source.unsplash.com/200x200/?shopping" alt="Produk Tersedia" className="mt-2 rounded" />
        </div>
      )}
    </div>
  );
}