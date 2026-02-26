import { Truck, Package, Warehouse, Car, Bike, Home, CheckCircle, ArrowRight, Shield, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'separate-vehicle',
      icon: Truck,
      title: 'Separate Vehicle Service',
      description: 'Dedicated vehicles exclusively for your cargo needs, ensuring maximum privacy, security, and direct delivery to your destination.',
      features: [
        'Exclusive vehicle usage - no shared space',
        'Direct point-to-point delivery',
        'Premium security and handling',
        'Flexible scheduling options',
        'Real-time GPS tracking',
        'Dedicated driver for your shipment',
        'Insurance coverage included',
        'Ideal for sensitive or high-value cargo'
      ],
      benefits: [
        'Complete privacy and security',
        'Faster delivery times',
        'No intermediate stops',
        'Customizable service'
      ]
    },
    {
      id: 'sharing-vehicle',
      icon: Package,
      title: 'Sharing Vehicle Service',
      description: 'Cost-effective transportation solution where multiple shipments share vehicle space, making logistics affordable without compromising quality.',
      features: [
        'Economical pricing structure',
        'Regular scheduled routes',
        'Professional cargo handling',
        'Consolidated shipments',
        'Reliable delivery schedules',
        'Proper cargo segregation',
        'Tracking and updates',
        'Perfect for smaller loads'
      ],
      benefits: [
        'Significant cost savings',
        'Eco-friendly shared transport',
        'Regular departure schedules',
        'Reliable service'
      ]
    },
    {
      id: 'warehouse',
      icon: Warehouse,
      title: 'Warehouse Solutions',
      description: 'Modern, secure storage facilities equipped with advanced inventory management systems and 24/7 security for your goods.',
      features: [
        'Climate-controlled storage units',
        '24/7 security surveillance',
        'Advanced inventory management',
        'Flexible storage durations',
        'Easy access and retrieval',
        'Fire safety systems',
        'Pest control measures',
        'Loading/unloading facilities'
      ],
      benefits: [
        'Safe and secure storage',
        'Flexible terms',
        'Professional management',
        'Strategic location'
      ]
    },
    {
      id: 'car-transport',
      icon: Car,
      title: 'Car Transport',
      description: 'Specialized vehicle transportation services with enclosed carriers and expert handling to ensure your car arrives safely.',
      features: [
        'Door-to-door pickup and delivery',
        'Enclosed carrier options',
        'Comprehensive insurance coverage',
        'Professional loading/unloading',
        'Regular status updates',
        'Experienced transport drivers',
        'Scratch-free delivery guarantee',
        'All car types accommodated'
      ],
      benefits: [
        'Safe and secure transit',
        'Hassle-free process',
        'Insurance protected',
        'Timely delivery'
      ]
    },
    {
      id: 'bike-transport',
      icon: Bike,
      title: 'Bike Transport',
      description: 'Expert motorcycle and bike transportation with specialized packaging and careful handling to protect your two-wheeler.',
      features: [
        'Protective packaging materials',
        'Specialized bike carriers',
        'Fuel tank draining service',
        'Battery disconnection',
        'Professional handling',
        'Swift delivery service',
        'Damage protection guarantee',
        'All bike models accepted'
      ],
      benefits: [
        'Safe packaging',
        'Quick delivery',
        'Expert handling',
        'Affordable rates'
      ]
    },
    {
      id: 'door-to-door',
      icon: Home,
      title: 'Door-to-Door Service',
      description: 'Complete end-to-end logistics solutions from pickup at your location to delivery at the destination doorstep.',
      features: [
        'Complete pickup service',
        'End-to-end tracking',
        'Professional packing assistance',
        'Doorstep delivery',
        'No intermediary handling',
        'Dedicated customer support',
        'Hassle-free experience',
        'All-inclusive service'
      ],
      benefits: [
        'Ultimate convenience',
        'Complete tracking',
        'Time-saving',
        'Peace of mind'
      ]
    }
  ];

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to meet all your transportation and storage needs with excellence and reliability.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center scroll-mt-24`}
              >
                {/* Icon and Title Section */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
                    <service.icon size={40} className="text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center"
                  >
                    Request Quote
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>

                {/* Features Section */}
                <div className="flex-1 w-full">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle size={16} className="text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer service for all your queries and needs.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                All shipments covered with comprehensive insurance for your peace of mind.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your shipment in real-time with our advanced tracking system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We can tailor our services to meet your specific requirements. Get in touch with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@carrypacklogistics.com"
              className="btn-primary btn-lg"
            >
              Email Us
            </a>
            <Link href="/contact" className="btn-secondary btn-lg">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
