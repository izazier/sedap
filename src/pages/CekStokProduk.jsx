import React, { useState } from "react";
import produkData from "../assets/produk.json"; // sesuaikan path

const CekStokProduk = () => {
  const [kode, setKode] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!kode) {
      setError("Kode produk tidak boleh kosong.");
      return;
    }
    if (kode.length < 4) {
      setError("Kode produk minimal 4 karakter.");
      return;
    }

    const produk = produkData.find(
      (item) => item.id.toLowerCase() === kode.toLowerCase()
    );

    if (!produk) {
      setError("❌ Kode produk tidak ditemukan.");
      return;
    }

    setResult(produk);
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cek Ketersediaan Produk
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Masukkan Kode Produk contoh 1000"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Cek Produk
        </button>
      </form>

      {result && (
        <div className="p-4 rounded border border-gray-300 bg-gray-50">
          {result.stok > 0 ? (
            <>
              <p className="text-green-700 font-semibold mb-2">
                ✅ Produk <span className="font-bold">{result.nama_produk}</span> tersedia dengan harga Rp{result.harga.toLocaleString()}.
              </p>
              <p>Stok tersedia: {result.stok}</p>
              <div className="mt-2">
                {/* Icon Keranjang (contoh emoji) */}
                🛒
              </div>
            </>
          ) : (
            <>
              <p className="text-yellow-700 font-semibold mb-2">
                ⚠️ Produk <span className="font-bold">{result.nama_produk}</span> saat ini sedang habis.
              </p>
              <div className="mt-2 text-red-500 font-bold text-xl">
                Out of Stock
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default CekStokProduk;
