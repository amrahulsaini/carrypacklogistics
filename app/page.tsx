import Link from 'next/link';
import Image from 'next/image';
import { Truck, Package, Warehouse, Car, Bike, Home, ArrowRight, CheckCircle, Clock, Shield, Users, Award, TrendingUp } from 'lucide-react';
import Counter from './components/Counter';

export default function HomePage() {
  const services = [
    {
      id: 'separate-vehicle',
      icon: Truck,
      title: 'Separate Vehicle',
      description: 'Dedicated vehicles for your exclusive cargo — privacy, security, direct delivery.',
    },
    {
      id: 'sharing-vehicle',
      icon: Package,
      title: 'Sharing Vehicle',
      description: 'Cost-effective shared transportation for smaller loads, same quality standard.',
    },
    {
      id: 'warehouse',
      icon: Warehouse,
      title: 'Warehouse Solutions',
      description: 'Secure storage with 24/7 monitoring and flexible inventory management.',
    },
    {
      id: 'car-transport',
      icon: Car,
      title: 'Car Transport',
      description: 'Specialized carriers with comprehensive insurance for safe vehicle transit.',
    },
    {
      id: 'bike-transport',
      icon: Bike,
      title: 'Bike Transport',
      description: 'Expert motorcycle packaging and transportation with damage protection.',
    },
    {
      id: 'door-to-door',
      icon: Home,
      title: 'Door-to-Door',
      description: 'Complete end-to-end logistics from pickup to doorstep delivery.',
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <p className="section-label animate-fade-in-up">Logistics Partner in Ahmedabad</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a365d] leading-[1.1] mb-6 animate-fade-in-up animation-delay-200" style={{ letterSpacing: '-0.04em' }}>
                Move with<br />
                <span className="text-[#c8a951]">confidence.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md animate-fade-in-up animation-delay-400">
                Structured logistics, transparent commitments, and premium execution — from Ahmedabad to anywhere in India.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-600">
                <Link href="/get-quote" className="btn-primary btn-lg group">
                  Get a Quote
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/services" className="btn-secondary btn-lg">
                  Our Services
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-12 flex items-center gap-8 animate-fade-in-up animation-delay-800">
                <div>
                  <div className="text-2xl font-bold text-[#1a365d]"><Counter end={1000} suffix="+" /></div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Clients</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <div className="text-2xl font-bold text-[#1a365d]"><Counter end={5000} suffix="+" /></div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Deliveries</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <div className="text-2xl font-bold text-[#1a365d]"><Counter end={99} suffix="%" /></div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">On-time</div>
                </div>
              </div>
            </div>

            {/* Right — Logo / Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-[#1a365d] to-[#2a4a7f] flex items-center justify-center shadow-2xl shadow-[#1a365d]/20">
                  <div className="relative w-40 h-40 rounded-full bg-white overflow-hidden">
                    <Image
                      src="/logo-carry.webp"
                      alt="Carry Pack Logistics"
                      fill
                      className="object-cover p-4"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#c8a951]/10 border border-[#c8a951]/20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-[#1a365d]/5 border border-[#1a365d]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.03em' }}>
                Comprehensive logistics<br className="hidden sm:block" /> solutions
              </h2>
            </div>
            <Link href="/services" className="text-[#1a365d] font-medium text-sm inline-flex items-center hover:underline underline-offset-4 group">
              View all services
              <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="service-card group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-sm font-medium text-[#1a365d] inline-flex items-center">
                  Learn more
                  <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Horizontal layout */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left column */}
            <div className="lg:col-span-2">
              <p className="section-label">Why Carry Pack</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
                Built on trust,<br />driven by results
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We don&apos;t just move goods — we build lasting partnerships through transparent operations and consistent delivery performance.
              </p>
              <Link href="/about" className="text-[#1a365d] font-medium text-sm inline-flex items-center hover:underline underline-offset-4 group">
                Learn about us
                <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right — Feature grid */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: 'On-Time Delivery', desc: 'We value your schedule. 99% of our deliveries arrive on or before the committed time.' },
                { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive coverage on every shipment. Your goods are protected door to door.' },
                { icon: Users, title: 'Professional Team', desc: 'Experienced logistics professionals trained for careful handling and execution.' },
                { icon: CheckCircle, title: 'Transparent Pricing', desc: 'No hidden costs. Clear, upfront rates so you know exactly what to expect.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#c8a951]/30 transition-colors">
                  <item.icon size={20} className="text-[#c8a951] mb-4" />
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — Minimal */}
      <section className="bg-[#1a365d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, end: 1000, suffix: '+', label: 'Happy Clients' },
              { icon: Package, end: 5000, suffix: '+', label: 'Deliveries' },
              { icon: TrendingUp, end: 99, suffix: '%', label: 'On-Time Rate' },
              { icon: Award, end: 24, suffix: '/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i}>
                <stat.icon size={24} className="mx-auto mb-3 text-[#c8a951]" />
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.03em' }}>
            Ready to streamline your logistics?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Tell us about your requirements and our team will craft a tailored solution within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-quote" className="btn-primary btn-lg">
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="mailto:sales@carrypacklogistics.com" className="btn-secondary btn-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
