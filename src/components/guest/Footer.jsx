import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-0">
      {/* Subscribe Section */}
      {/* Subscribe Section */}
      <div className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/bg-pattern.jpg')",
          }}
        />

        {/* Orange overlay */}
        <div className="absolute inset-0 bg-orange-500 opacity-80" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto py-14 px-6 grid md:grid-cols-2 gap-6 text-white">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Subscribe to our mailing list and stay up to date
            </h3>
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when at its layout
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your E-mail address"
              className="px-4 py-2 rounded-full w-full text-gray-800"
            />
            <button className="border border-white text-white py-2 rounded-full hover:bg-white hover:text-orange-500 transition">
              SUBSCRIBE US
            </button>
          </div>
        </div>
      </div>


      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-5 gap-8 text-sm">
        {/* Logo & Desc */}
        <div>
          <img src="/img/abg.png" alt="Logo" className="h-10 mb-4" />
          <p>
            Comprehensive report, data visualization, and insights to analyze
            your business.
          </p>
          <button className="mt-4 bg-orange-400 text-white py-1.5 px-4 rounded-full">
            Subscribe
          </button>
        </div>

        {/* 4 Columns */}
        <div>
          <h4 className="font-semibold mb-3">Solution</h4>
          <ul className="space-y-2">
            <li>Enterprise</li>
            <li>By Workflow</li>
            <li>By Team</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>News & Press</li>
            <li>Our Customer</li>
            <li>Leadership</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Webinar & Events</li>
            <li>Podcast</li>
            <li>E-book & Guides</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li>Contact Sales</li>
            <li>Become Partner</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="mb-3 md:mb-0">
          © 2025 Sedap – Design inspired by ❤️ MarkeyThemes
        </p>
        <div className="flex space-x-4 items-center">
          <a href="#" className="bg-white text-gray-900 rounded-full p-2 hover:bg-orange-400 hover:text-white transition">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="bg-white text-gray-900 rounded-full p-2 hover:bg-orange-400 hover:text-white transition">
            <i className="fab fa-youtube" />
          </a>
          <a href="#" className="bg-white text-gray-900 rounded-full p-2 hover:bg-orange-400 hover:text-white transition">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
