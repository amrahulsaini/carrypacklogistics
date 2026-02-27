import Link from 'next/link';
import Image from 'next/image';
import { Truck, Package, Warehouse, Car, Bike, Home, ArrowRight, CheckCircle, Clock, Shield, Users, Award, TrendingUp } from 'lucide-react';
import Counter from './components/Counter';
import TestimonialsSlider from './components/TestimonialsSlider';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-10 lg:pb-16">
          <div className="grid items-center">
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

            {/* Right — Logo / Visual (hidden) */}
            <div className="hidden">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
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

      {/* How It Works — Vertical Flowchart */}
      <section className="py-20 bg-[#f8f9fc] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1a365d 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="section-label">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.03em' }}>
              How it works
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              Four seamless steps — from booking to your doorstep.
            </p>
          </div>

          {/* Vertical flowchart */}
          <div className="relative">
            {/* Continuous spine line */}
            <div className="absolute left-[27px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a365d] via-[#c8a951] to-[#1a365d]" />

            <div className="space-y-0">
              {[
                { step: '01', img: '/book-order.webp',  title: 'Book Your Order',    desc: "Fill out our quote form or call us. We'll confirm your booking within hours.",  dot: 'bg-[#1a365d]', side: 'left'  },
                { step: '02', img: '/pack-things.webp', title: 'We Pack Everything', desc: 'Our crew arrives and wraps every item with premium protective materials.',       dot: 'bg-[#c8a951]', side: 'right' },
                { step: '03', img: '/move-things.webp', title: 'We Move with Care',  desc: 'Shipment loaded securely and transported with real-time tracking.',              dot: 'bg-[#1a365d]', side: 'left'  },
                { step: '04', img: '/delivery.webp',    title: 'Safe Delivery',      desc: 'Goods unloaded and delivered right to your door — on time, every time.',        dot: 'bg-[#c8a951]', side: 'right' },
              ].map((item, i) => (
                <div key={item.step}>
                  {/* ── Mobile: single column left-aligned ── */}
                  <div className="flex gap-4 items-center sm:hidden py-4">
                    <div className={`relative z-10 flex-shrink-0 w-[54px] h-[54px] rounded-full ${item.dot} flex items-center justify-center text-white font-bold text-sm shadow-md border-4 border-[#f8f9fc]`}>
                      {item.step}
                    </div>
                    <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex gap-3 items-start">
                      <div className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden">
                        <Image src={item.img} alt={item.title} fill className="object-cover" sizes="64px" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* ── sm+: alternating left / right ── */}
                  <div className="hidden sm:grid grid-cols-[1fr_56px_1fr] items-center py-3">
                    {/* Left slot */}
                    {item.side === 'left' ? (
                      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex gap-4 items-start group hover:shadow-md hover:border-[#1a365d]/25 transition-all mr-4">
                        <div className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden">
                          <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="56px" />
                        </div>
                        <div className="pt-0.5">
                          <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}

                    {/* Centre node */}
                    <div className="flex flex-col items-center gap-0 relative z-10">
                      <div className={`w-[46px] h-[46px] rounded-full ${item.dot} text-white font-bold text-sm flex items-center justify-center shadow-lg border-4 border-[#f8f9fc] flex-shrink-0`}>
                        {item.step}
                      </div>
                    </div>

                    {/* Right slot */}
                    {item.side === 'right' ? (
                      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex gap-4 items-start group hover:shadow-md hover:border-[#c8a951]/30 transition-all ml-4">
                        <div className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden">
                          <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="56px" />
                        </div>
                        <div className="pt-0.5">
                          <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#1a365d] hover:bg-[#2a4a7f] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#1a365d]/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      {/* Why Choose Us — Horizontal layout */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
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
                <div key={i} className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#c8a951]/40 transition-all shadow-sm hover:shadow-md">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.03em' }}>
              What our clients say
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              Trusted by 1000+ customers across India for safe, reliable logistics.
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
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
