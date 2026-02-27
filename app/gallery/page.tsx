'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Package, Truck, Shield, Sparkles, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/gall/vehicle-packing.jpeg',
    title: 'Vehicle Packing',
    description: 'Professional car and bike transport with complete safety measures'
  },
  {
    src: '/gall/vehicle-packing2.jpeg',
    title: 'Secure Vehicle Transport',
    description: 'Premium vehicle packaging and handling services'
  },
  {
    src: '/gall/almirah-packing.jpeg',
    title: 'Furniture Packing',
    description: 'Expert packing of almirahs and heavy furniture items'
  },
  {
    src: '/gall/electronics-packing.jpeg',
    title: 'Electronics Packing',
    description: 'Safe packaging of TVs, refrigerators, and electronic appliances'
  },
  {
    src: '/gall/smallgoods-packing.jpeg',
    title: 'Household Goods',
    description: 'Careful packing of small goods and household items'
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="page-container">
      {/* Header */}
      <section className="bg-[#1a365d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative">
          <p className="text-[#c8a951] text-xs uppercase tracking-[0.2em] font-semibold mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            Gallery
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            See how we pack and transport your valuable belongings with care and precision.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#fafafa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: 'Premium Material', desc: 'High-quality bubble wrap, cartons, and protective materials' },
              { icon: Shield, title: 'Fully Insured', desc: 'Complete insurance coverage during transit' },
              { icon: Truck, title: 'Door-to-Door', desc: 'Pick up from your doorstep, deliver to destination' },
              { icon: Sparkles, title: 'Professional Team', desc: 'Trained staff for safe handling' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#1a365d]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon size={16} className="text-[#1a365d]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-0.5 hidden md:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label">Packing & Transportation</p>
            <h2 className="text-3xl font-bold text-gray-900" style={{ letterSpacing: '-0.03em' }}>
              Professional packing for all types of goods
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-100"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base font-semibold mb-1">{image.title}</h3>
                  <p className="text-xs text-gray-300">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-5 right-5 text-white/60 hover:text-white z-10 transition-colors" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>

          <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 className="text-lg font-semibold mb-1">{galleryImages[selectedImage].title}</h3>
              <p className="text-sm text-gray-300">{galleryImages[selectedImage].description}</p>
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#1a365d]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            Ready for Premium Packing?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a quote for your next move and experience the difference.
          </p>
          <Link href="/get-quote" className="btn-accent btn-lg inline-flex items-center group">
            Get Quote
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
