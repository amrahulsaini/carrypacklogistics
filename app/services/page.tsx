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
        'Exclusive vehicle usage — no shared space',
        'Direct point-to-point delivery',
        'Premium security and handling',
        'Flexible scheduling options',
        'Real-time GPS tracking',
        'Dedicated driver for your shipment',
        'Insurance coverage included',
        'Ideal for sensitive or high-value cargo'
      ],
      benefits: ['Complete privacy and security', 'Faster delivery times', 'No intermediate stops', 'Customizable service']
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
      benefits: ['Significant cost savings', 'Eco-friendly shared transport', 'Regular departure schedules', 'Reliable service']
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
      benefits: ['Safe and secure storage', 'Flexible terms', 'Professional management', 'Strategic location']
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
      benefits: ['Safe and secure transit', 'Hassle-free process', 'Insurance protected', 'Timely delivery']
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
      benefits: ['Safe packaging', 'Quick delivery', 'Expert handling', 'Affordable rates']
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
      benefits: ['Ultimate convenience', 'Complete tracking', 'Time-saving', 'Peace of mind']
    }
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <section className="bg-[#1a365d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <p className="text-[#c8a951] text-xs uppercase tracking-[0.2em] font-semibold mb-4">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Comprehensive logistics solutions designed to meet all your transportation and storage needs with excellence and reliability.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                {/* Service number + title row */}
                <div className="flex items-start gap-6 mb-8">
                  <span className="text-6xl font-bold text-gray-100 leading-none select-none hidden sm:block" style={{ fontFeatureSettings: '"tnum"' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#1a365d]/5 flex items-center justify-center mb-3">
                      <service.icon size={20} className="text-[#1a365d]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 pl-0 sm:pl-20">
                  {/* Left — description + benefits */}
                  <div>
                    <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold mb-4">Key Benefits</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a951] mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href="/get-quote" className="btn-primary inline-flex items-center group">
                      Request Quote
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right — features */}
                  <div className="bg-[#fafafa] rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold mb-5">Service Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle size={16} className="text-[#c8a951] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Separator */}
                {index < services.length - 1 && (
                  <div className="mt-24 border-t border-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom features bar */}
      <section className="bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock customer service for all your queries.' },
              { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive insurance on every shipment we handle.' },
              { icon: MapPin, title: 'Real-Time Tracking', desc: 'Track your shipment live with our advanced systems.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a365d]/5 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#1a365d]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">Custom Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
            Need something tailored?
          </h2>
          <p className="text-gray-500 mb-8">
            We can customize our services to meet your specific requirements. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-quote" className="btn-primary btn-lg">
              Get a Quote
            </Link>
            <Link href="/contact" className="btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
