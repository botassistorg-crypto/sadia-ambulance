import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Ambulance } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar for Urgent Call */}
      <div className="bg-yellow-400 py-2 px-4 text-center text-red-900 font-bold text-sm md:text-base flex items-center justify-center gap-2">
        <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded animate-pulse">24/7 EMERGENCY</span>
        <span>Call Now: 01884959116</span>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-red-600 p-2 rounded-lg group-hover:bg-red-700 transition-colors">
            <Ambulance className="text-white w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-red-600 leading-none tracking-tight">SADIA</span>
            <span className="text-sm font-semibold text-gray-600 tracking-widest">AMBULANCE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                isActive(link.path) ? 'text-red-600 font-bold' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+8801884959116"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-red-200"
          >
            <Phone size={18} />
            <span>Emergency Call</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${
                  isActive(link.path) ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+8801884959116"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg font-bold w-full"
            >
              <Phone size={18} />
              <span>Emergency Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};