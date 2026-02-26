import Link from 'next/link';
import Image from 'next/image';
import { Truck, Package, Warehouse, Car, Bike, Home, ArrowRight, CheckCircle, Clock, Shield, Users } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      id: 'separate-vehicle',
      icon: Truck,
      title: 'Separate Vehicle Service',
      description: 'Dedicated vehicles for your exclusive cargo needs. Perfect for large shipments requiring privacy and security.',
      features: ['Exclusive use', 'Direct delivery', 'Premium security']
    },
    {
      id: 'sharing-vehicle',
      icon: Package,
      title: 'Sharing Vehicle Service',
      description: 'Cost-effective shared transportation solutions for smaller loads without compromising on quality.',
      features: ['Cost-efficient', 'Scheduled routes', 'Reliable service']
    },
    {
      id: 'warehouse',
      icon: Warehouse,
      title: 'Warehouse Solutions',
      description: 'State-of-the-art storage facilities with 24/7 security and inventory management systems.',
      features: ['Climate controlled', 'Security monitored', 'Flexible terms']
    },
    {
      id: 'car-transport',
      icon: Car,
      title: 'Car Transport',
      description: 'Safe and secure vehicle transportation with specialized carriers and comprehensive insurance.',
      features: ['Door-to-door', 'Insured transit', 'Professional handling']
    },
    {
      id: 'bike-transport',
      icon: Bike,
      title: 'Bike Transport',
      description: 'Specialized motorcycle and bike transportation services with expert handling and care.',
      features: ['Protective packaging', 'Swift delivery', 'Damage protection']
    },
    {
      id: 'door-to-door',
      icon: Home,
      title: 'Door-to-Door Service',
      description: 'Complete end-to-end logistics solutions from pickup to delivery at your doorstep.',
      features: ['Complete tracking', 'Hassle-free', 'Timely delivery']
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We value your time and ensure punctual deliveries every time.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your cargo is protected with our comprehensive insurance coverage.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Experienced logistics professionals dedicated to your satisfaction.'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No hidden costs. Clear, upfront pricing for all our services.'
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32 animate-float rounded-full bg-white shadow-2xl overflow-hidden border-4 border-blue-200">
                <Image
                  src="/logo-carry.webp"
                  alt="Carry Pack Logistics"
                  fill
                  className="object-cover p-3"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Carry Pack Logistics
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium animate-fade-in-up animation-delay-200">
              Structured Logistics. Transparent Commitments.
            </p>
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8 animate-fade-in-up animation-delay-400">
              Premium Execution.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              Your trusted partner for comprehensive logistics solutions in Ahmedabad. From transportation to warehousing, we deliver excellence at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
              <Link href="/contact" className="btn-primary btn-lg">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/services" className="btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Excellence in logistics, commitment to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <item.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get in touch with us today for a customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@carrypacklogistics.com"
              className="btn-white btn-lg"
            >
              Email Us
            </a>
            <Link href="/contact" className="btn-outline-white btn-lg">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
