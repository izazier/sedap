import React from "react";
import { useRouteError } from "react-router-dom";

const defaultMessages = {
  401: "Tidak diizinkan. Silakan login terlebih dahulu.",
  403: "Akses ditolak. Anda tidak punya izin.",
  404: "Halaman tidak ditemukan.",
  500: "Terjadi kesalahan server.",
};

const ErrorPage = ({
  errorCode,
  errorDescription,
  errorImage = "/img/Group 2.jpg",
}) => {
  const routeError = useRouteError();
  const code = errorCode || routeError?.status || 404;
  const description =
    errorDescription || defaultMessages[code] || "Terjadi kesalahan.";

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${errorImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4 py-10">
        <div className="text-center text-white">
          <h1 className="text-[10rem] font-hacked mb-4">{code}</h1>
          <p className="text-2xl font-hacked mb-6">{description}</p>
          <a
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
