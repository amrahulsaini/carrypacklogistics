import { Target, Eye, Award, Users, Shield, Clock, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* Header */}
      <section className="bg-[#1a365d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative">
          <p className="text-[#c8a951] text-xs uppercase tracking-[0.2em] font-semibold mb-4">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            About Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Your trusted logistics partner committed to excellence and reliability.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left — Logo + Stats */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#1a365d] to-[#2a4a7f] rounded-2xl p-8 flex items-center justify-center mb-8">
                <div className="relative w-32 h-32 rounded-full bg-white overflow-hidden">
                  <Image
                    src="/logo-carry.webp"
                    alt="Carry Pack Logistics"
                    fill
                    className="object-cover p-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1000+', label: 'Happy Clients' },
                  { value: '5000+', label: 'Deliveries' },
                  { value: '99%', label: 'On-Time Rate' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#fafafa] rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-[#1a365d] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Copy */}
            <div className="lg:col-span-3">
              <p className="section-label">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ letterSpacing: '-0.03em' }}>
                Carry Pack Logistics
              </h2>
              <div className="divider mb-6"></div>
              <p className="text-[#c8a951] font-medium mb-6">
                Structured Logistics. Transparent Commitments. Premium Execution.
              </p>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  At Carry Pack Logistics, we deliver more than just packages — we deliver trust, reliability, and peace of mind. Established with a vision to revolutionize logistics in Ahmedabad and beyond, we&apos;ve grown to become a trusted name in transportation and warehousing solutions.
                </p>
                <p>
                  Our commitment to structured logistics means every shipment is handled with precision and care. We maintain transparent communication throughout the journey, and our premium execution ensures your goods arrive safely and on time, every time.
                </p>
                <p>
                  With state-of-the-art facilities, a dedicated team of professionals, and a customer-first approach, we continue to set new standards in the logistics industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.03em' }}>
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To provide reliable, efficient, and cost-effective logistics solutions that exceed customer expectations while maintaining the highest standards of safety and professionalism.'
              },
              {
                icon: Eye,
                title: 'Our Vision',
                text: 'To become the most trusted logistics partner in India, recognized for our innovation, reliability, and commitment to customer success in every delivery we make.'
              },
              {
                icon: Award,
                title: 'Our Values',
                text: 'Integrity, transparency, customer focus, innovation, and excellence in execution. These core values guide every decision we make and every service we deliver.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#c8a951]/30 transition-all">
                <item.icon size={20} className="text-[#c8a951] mb-5" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.03em' }}>
              Why Choose Carry Pack
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Professional Team', desc: 'Experienced logistics professionals trained to handle your shipments with utmost care and expertise.' },
              { icon: Shield, title: 'Safe & Secure', desc: 'Comprehensive insurance coverage and advanced security measures for complete protection of your goods.' },
              { icon: Clock, title: 'Timely Delivery', desc: '99% on-time delivery rate with real-time tracking and proactive communication at every step.' },
              { icon: TrendingUp, title: 'Competitive Pricing', desc: 'Transparent, competitive rates with no hidden charges. Best value for your logistics investment.' },
              { icon: MapPin, title: 'Wide Network', desc: 'Extensive coverage across major cities ensuring smooth and efficient logistics operations nationwide.' },
              { icon: Award, title: 'Quality Service', desc: 'Commitment to excellence in every aspect of our service, from booking to delivery and beyond.' },
            ].map((item, i) => (
              <div key={i} className="p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#c8a951]/30 transition-all bg-white shadow-sm hover:shadow-md">
                <item.icon size={18} className="text-[#1a365d] mb-4" />
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label">Visit Us</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ letterSpacing: '-0.03em' }}>Our Office</h2>
            <div className="bg-white rounded-xl p-7 border border-gray-200 shadow-sm">
              <MapPin size={20} className="text-[#c8a951] mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                A-11, bijal biasness centre aslali circle ahmedabad 382427
              </p>
              <a href="mailto:sales@carrypacklogistics.com" className="text-[#1a365d] text-sm font-medium hover:underline underline-offset-4">
                sales@carrypacklogistics.com
              </a>
              <span className="mx-3 text-gray-300">|</span>
              <a href="tel:+918949437619" className="text-[#1a365d] text-sm font-medium hover:underline underline-offset-4">
                +91 89494 37619
              </a>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center group">
                Get in Touch
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
