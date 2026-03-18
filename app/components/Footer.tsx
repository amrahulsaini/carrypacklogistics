import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Top bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/logo-carry.webp"
                  alt="Carry Pack Logistics"
                  fill
                  className="object-cover p-0.5"
                />
              </div>
              <span className="text-lg font-semibold tracking-tight">Carry Pack Logistics</span>
            </div>
            <p className="text-sm text-gray-500 tracking-wide">
              Structured Logistics · Transparent Commitments · Premium Execution
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">About</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted logistics partner in Ahmedabad, delivering excellence in transportation and warehousing solutions since day one.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1CQxVgbM4i/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/gabrumunda09?igsh=ZXdiMTFsM3BnN2lq" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link inline-flex items-center group">
                    {link.label}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { href: '/services#separate-vehicle', label: 'Separate Vehicle' },
                { href: '/services#sharing-vehicle', label: 'Sharing Vehicle' },
                { href: '/services#warehouse', label: 'Warehouse Solutions' },
                { href: '/services#car-transport', label: 'Car Transport' },
                { href: '/services#bike-transport', label: 'Bike Transport' },
                { href: '/services#door-to-door', label: 'Door-to-Door' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#c8a951] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  A-11, bijal biasness centre aslali circle ahmedabad 382427
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#c8a951] flex-shrink-0" />
                <a href="mailto:sales@carrypacklogistics.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  sales@carrypacklogistics.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#c8a951] flex-shrink-0" />
                <a href="tel:+918949437619" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 89494 37619
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} Carry Pack Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
