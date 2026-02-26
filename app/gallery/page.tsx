'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Package, Truck, Shield, Sparkles, X } from 'lucide-react';

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

const features = [
  {
    icon: Package,
    title: 'Premium Packing Material',
    description: 'High-quality bubble wrap, cartons, and protective materials for all items'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete insurance coverage for your goods during transit'
  },
  {
    icon: Truck,
    title: 'Door-to-Door Service',
    description: 'Pick up from your doorstep and deliver to destination'
  },
  {
    icon: Sparkles,
    title: 'Professional Team',
    description: 'Trained and experienced staff for safe handling'
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="mx-auto mb-6" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how we pack and transport your valuable belongings with care and precision
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Packing Services?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We use industry-best practices to ensure your items reach safely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <feature.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packing & Transportation Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Professional packing services for all types of goods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-200">{galleryImages[selectedImage].description}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
            }}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
            }}
          >
            →
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Premium Packing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a quote for your next move and see the difference professional packing makes
          </p>
          <a href="/get-quote" className="btn-primary btn-lg bg-white text-blue-600 hover:bg-gray-100">
            Get Quote
          </a>
        </div>
      </section>
    </div>
  );
}
