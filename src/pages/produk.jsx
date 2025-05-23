import React from 'react';
import products from '../assets/Products.json';

const Products = () => {
    return (
  <section className="p-10 bg-gray-100">
    <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Kode produk</th>
            <th className="border p-2">Nama produk</th>
            <th className="border p-2">Harga</th>
          </tr>
        </thead>
    <h2 className="text-2xl font-bold text-center mb-6">Produk</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((item) => (
        <div key={item.kode_produk} className="bg-white p-4 shadow rounded text-center">
          <img alt={item.nama_produk} className="h-40 mx-auto mb-2" />
          <h3 className="font-semibold">{item.nama_produk}</h3>
          <p>Rp{item.harga}</p>
        </div>
      ))}
    </div>
  </section>
);
};

export default Products;
