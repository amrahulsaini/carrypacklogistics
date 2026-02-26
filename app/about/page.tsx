import { Target, Eye, Award, Users, Shield, Clock, TrendingUp, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted logistics partner committed to excellence and reliability
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="relative w-40 h-40 mx-auto lg:mx-0 rounded-full bg-white shadow-xl overflow-hidden border-4 border-blue-100">
                  <Image
                    src="/logo-carry.webp"
                    alt="Carry Pack Logistics"
                    fill
                    className="object-cover p-4"
                  />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Carry Pack Logistics
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                Structured Logistics. Transparent Commitments. Premium Execution.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                At Carry Pack Logistics, we believe in delivering more than just packages – we deliver trust, reliability, and peace of mind. Established with a vision to revolutionize the logistics industry in Ahmedabad and beyond, we have grown to become a trusted name in transportation and warehousing solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our commitment to structured logistics means every shipment is handled with precision and care. We maintain transparent communication throughout the journey, and our premium execution ensures your goods arrive safely and on time, every time.
              </p>
              <p className="text-lg text-gray-600">
                With state-of-the-art facilities, a dedicated team of professionals, and a customer-first approach, we continue to set new standards in the logistics industry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
                <div className="text-gray-700 font-medium">Deliveries</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-gray-700 font-medium">On-Time Rate</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, efficient, and cost-effective logistics solutions that exceed customer expectations while maintaining the highest standards of safety and professionalism.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Eye size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted logistics partner in India, recognized for our innovation, reliability, and commitment to customer success in every delivery we make.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <Award size={32} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, customer focus, innovation, and excellence in execution. These core values guide every decision we make and every service we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Carry Pack Logistics</h2>
            <p className="section-subtitle">
              Experience the difference with our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                <Users size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Team</h3>
              <p className="text-gray-600">
                Experienced logistics professionals trained to handle your shipments with utmost care and expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                <Shield size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                Comprehensive insurance coverage and advanced security measures for complete protection of your goods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
                <Clock size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                99% on-time delivery rate with real-time tracking and proactive communication at every step.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4">
                <TrendingUp size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Transparent, competitive rates with no hidden charges. Get the best value for your logistics investment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-4">
                <MapPin size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Network</h3>
              <p className="text-gray-600">
                Extensive network coverage across major cities ensuring smooth and efficient logistics operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mb-4">
                <Award size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Service</h3>
              <p className="text-gray-600">
                Commitment to excellence in every aspect of our service, from booking to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">We're here to serve you</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <MapPin size={24} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Address</h3>
                <p className="text-lg text-gray-600">
                  Office No.223, Bijal Business Centre,<br />
                  Aslali Circle, Ahmedabad
                </p>
                <p className="text-gray-500 mt-4">
                  Email: <a href="mailto:sales@carrypacklogistics.com" className="text-blue-600 hover:text-blue-700">sales@carrypacklogistics.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
