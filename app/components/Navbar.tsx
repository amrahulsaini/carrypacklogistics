'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-md py-0'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name - Leftmost */}
          <Link href="/" className="flex items-center space-x-4 group mr-auto">
            <div className="relative w-16 h-16 flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 rounded-full bg-white shadow-lg overflow-hidden border-2 border-blue-100 group-hover:border-blue-400">
              <Image
                src="/logo-carry.webp"
                alt="Carry Pack Logistics"
                fill
                className="object-cover p-2"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-blue-600 group-hover:translate-x-1">
                Carry Pack Logistics
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600 hidden sm:block transition-all duration-300 group-hover:text-blue-500 leading-tight">
                Structured Logistics. Transparent Commitments.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="nav-link-enhanced">Home</Link>
            <Link href="/services" className="nav-link-enhanced">Services</Link>
            <Link href="/about" className="nav-link-enhanced">About</Link>
            <Link href="/contact" className="nav-link-enhanced">Contact</Link>
            <Link 
              href="/get-quote" 
              className="btn-primary-enhanced"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {isOpen ? (
              <X size={24} className="text-gray-700 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
          <Link href="/" className="mobile-nav-link-enhanced" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="mobile-nav-link-enhanced" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/about" className="mobile-nav-link-enhanced" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="mobile-nav-link-enhanced" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link 
            href="/get-quote" 
            className="block w-full text-center btn-primary-enhanced mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
