import React from 'react';
import HeroSection from '../components/guest/HeroSection';
import AboutSection from '../components/guest/AboutSection';
import ProdukUnggulan from '../components/guest/ProdukUnggulan';
import Testimoni from '../components/guest/Testimoni';
import Navbar from '../components/Navbar';
import Footer from '../components/guest/Footer';
import CekStokProduk from './CekStokProduk';
import StatsSection from '../components/guest/StatsSection';

const GuestHome = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection/>
      <AboutSection />
      <ProdukUnggulan />
      <Testimoni />
      <CekStokProduk/>
      <Footer />
    </>
  );
};

export default GuestHome;