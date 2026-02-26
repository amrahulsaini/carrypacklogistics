import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 rounded-full bg-white shadow-md overflow-hidden border-2 border-gray-700">
                <Image
                  src="/logo-carry.webp"
                  alt="Carry Pack Logistics"
                  fill
                  className="object-cover p-1"
                />
              </div>
              <h3 className="text-xl font-bold">Carry Pack Logistics</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Structured Logistics. Transparent Commitments. Premium Execution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#separate-vehicle" className="footer-link">
                  Separate Vehicle Service
                </Link>
              </li>
              <li>
                <Link href="/services#sharing-vehicle" className="footer-link">
                  Sharing Vehicle Service
                </Link>
              </li>
              <li>
                <Link href="/services#warehouse" className="footer-link">
                  Warehouse Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#car-transport" className="footer-link">
                  Car Transport
                </Link>
              </li>
              <li>
                <Link href="/services#bike-transport" className="footer-link">
                  Bike Transport
                </Link>
              </li>
              <li>
                <Link href="/services#door-to-door" className="footer-link">
                  Door-to-Door Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Office No.223, Bijal Business Centre, Aslali Circle, Ahmedabad
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:sales@carrypacklogistics.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  sales@carrypacklogistics.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  +91 89494 37619
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Carry Pack Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
