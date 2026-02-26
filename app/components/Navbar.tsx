'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)] py-1'
        : 'bg-white py-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/logo-carry.webp"
                alt="Carry Pack Logistics"
                fill
                className="object-cover p-1"
                priority
              />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-[#1a365d]">
                Carry Pack
              </span>
              <span className="hidden sm:inline text-lg font-light tracking-tight text-gray-400 ml-1">
                Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link-enhanced">
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-quote"
              className="btn-primary-enhanced group"
            >
              Get Quote
              <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 rounded-md hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} className="text-gray-600" /> : <Menu size={22} className="text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-1 pb-5 space-y-1 bg-white border-t border-gray-100">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link-enhanced"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/get-quote"
              className="block w-full text-center btn-primary-enhanced py-3"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
