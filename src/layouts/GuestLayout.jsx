import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div>
      <header>{/* Tempatkan Navbar */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* Tempatkan Footer */}</footer>
    </div>
  );
};

export default GuestLayout;