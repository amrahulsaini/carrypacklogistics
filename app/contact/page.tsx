'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <div className="page-container">
      {/* Header */}
      <section className="bg-[#1a365d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative">
          <p className="text-[#c8a951] text-xs uppercase tracking-[0.2em] font-semibold mb-4">Reach Out</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Get in touch with us for all your logistics needs. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ letterSpacing: '-0.02em' }}>Get In Touch</h2>
              <p className="text-sm text-gray-500 mb-8">
                Have questions? We&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Office Address',
                    content: <span>Office No.223, Bijal Business Centre,<br />Aslali Circle, Ahmedabad</span>
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: <a href="mailto:sales@carrypacklogistics.com" className="text-[#1a365d] hover:underline underline-offset-4">sales@carrypacklogistics.com</a>
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: <a href="tel:+918949437619" className="text-[#1a365d] hover:underline underline-offset-4">+91 89494 37619</a>
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1a365d]/5 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-[#1a365d]" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.1em] text-gray-400 font-semibold mb-1">{item.title}</h3>
                      <div className="text-sm text-gray-600">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-[#fafafa] rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={16} className="text-[#c8a951]" />
                  <h3 className="text-sm font-semibold text-gray-900">Business Hours</h3>
                </div>
                <p className="text-sm text-gray-500 ml-7">
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: 10:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl border border-gray-200 p-7 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-sm text-gray-500">Your message has been sent. We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Phone *
                        </label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="input-field" placeholder="+91 9876543210" />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Service *
                        </label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} required className="input-field">
                          <option value="">Select a service</option>
                          <option value="separate-vehicle">Separate Vehicle</option>
                          <option value="sharing-vehicle">Sharing Vehicle</option>
                          <option value="warehouse">Warehouse Solutions</option>
                          <option value="car-transport">Car Transport</option>
                          <option value="bike-transport">Bike Transport</option>
                          <option value="door-to-door">Door-to-Door</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="input-field" placeholder="Tell us about your requirements..." />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Send Message
                      <Send size={16} className="ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
            Need Immediate Assistance?
          </h2>
          <p className="text-sm text-gray-500 mb-6">Reach us directly for urgent inquiries</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:sales@carrypacklogistics.com" className="btn-primary inline-flex items-center justify-center">
              <Mail size={16} className="mr-2" />
              Email Us
            </a>
            <a href="tel:+918949437619" className="btn-secondary inline-flex items-center justify-center">
              <Phone size={16} className="mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
