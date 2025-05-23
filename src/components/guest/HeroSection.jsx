import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-center md:text-left">
        
        {/* Kiri: teks */}
        <div className="max-w-xl">
          <p className="text-sm text-gray-600 mb-2">Let's Make The Best Order</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Anda memesan, <span className="text-red-400">kami menyiapkan</span><br />
            <span className="text-slate-900">Pesan dengan <span className="text-red-500">Sedap</span></span>
          </h1>
          <p className="text-base text-gray-600 mb-6">
            Pilih makanan favoritmu, nikmati pengiriman cepat, dan rasakan pengalaman pemesanan terbaik dari Sedap.
          </p>

          {/* Rating */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-3 sm:space-y-0 mb-8 justify-center md:justify-start">
            <div className="flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className="w-6 h-6" />
              <span className="text-lg font-semibold text-gray-800">4.5</span>
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-sm text-gray-600">Google</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
              <span className="text-lg font-semibold text-gray-800">4.7</span>
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-sm text-gray-600">LinkedIn</span>
            </div>
          </div>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow transition">
              Get Free Trial
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow transition">
              Started Order
            </button>
          </div>
        </div>

        {/* Kanan: gambar dan overlay */}
        <div className="relative w-fit">
          <img 
            src="/img/orang20.png" 
            alt="Happy customer" 
            className="w-[320px] md:w-[400px] object-contain rounded-xl"
          />

          {/* Floating avatar kiri */}
          <div className="absolute top-4 -left-6 bg-white p-2 rounded-full shadow-md flex items-center space-x-2">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full" alt="User" />
            <div>
              <p className="text-xs font-medium">Ayu</p>
              <p className="text-yellow-400 text-xs">★★★★★</p>
            </div>
          </div>

          {/* Floating avatar bawah */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-md flex items-center space-x-2">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full" alt="User" />
            <p className="text-xs text-gray-800 font-medium">"Sedap banget!"</p>
          </div>

          {/* Floating avatar kanan */}
          <div className="absolute top-8 -right-6 bg-white p-2 rounded-full shadow-md">
            <img src="https://randomuser.me/api/portraits/men/76.jpg" className="w-8 h-8 rounded-full" alt="User" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
