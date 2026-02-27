'use client';

import { useState } from 'react';
import { MapPin, Calendar, Send, CheckCircle, Phone, Mail, Shield, Clock, Truck } from 'lucide-react';

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    movingDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = `Error ${response.status}: ${data.error || 'Failed to submit lead'}. ${JSON.stringify(data)}`;
        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
      setFormData({ name: '', contactNumber: '', email: '', movingFrom: '', movingTo: '', movingDate: '', message: '' });
      setTimeout(() => { setIsSubmitted(false); }, 8000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <section className="bg-[#1a365d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative">
          <p className="text-[#c8a951] text-xs uppercase tracking-[0.2em] font-semibold mb-4">Request a Quote</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            Get Your Quote
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Tell us about your moving requirements and get a customized quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Info sidebar */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>Why choose us?</h3>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Clock, title: 'Quick Response', desc: 'Get a quote within 24 hours of your request.' },
                  { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive coverage on every shipment.' },
                  { icon: Truck, title: 'Nationwide Network', desc: 'Coverage across all major Indian cities.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1a365d]/5 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-[#1a365d]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

                <div className="bg-[#fafafa] rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Need immediate help?</h4>
                <div className="space-y-3">
                  <a href="tel:+918949437619" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a365d] transition-colors">
                    <Phone size={14} className="text-[#c8a951]" />
                    +91 89494 37619
                  </a>
                  <a href="mailto:sales@carrypacklogistics.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a365d] transition-colors">
                    <Mail size={14} className="text-[#c8a951]" />
                    sales@carrypacklogistics.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {isSubmitted ? (
                <div className="bg-white rounded-xl border border-gray-200 p-10 sm:p-12 text-center shadow-sm">
                  <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                  <p className="text-sm text-gray-500 mb-2">Your request has been submitted successfully.</p>
                  <p className="text-sm text-gray-400 mb-6">We&apos;ve sent a confirmation email. Our team will contact you within 24 hours.</p>
                  <button onClick={() => window.location.reload()} className="btn-primary">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ letterSpacing: '-0.02em' }}>Request a Quote</h2>
                  <p className="text-sm text-gray-400 mb-6">Fill in the details and our experts will get back to you.</p>

                  {error && (
                    <div className="mb-5 p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="contactNumber" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Contact Number *</label>
                        <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required pattern="[0-9]{10}" className="input-field" placeholder="9876543210" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="john@example.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="movingFrom" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          <MapPin size={12} className="inline mr-1" /> Moving From *
                        </label>
                        <input type="text" id="movingFrom" name="movingFrom" value={formData.movingFrom} onChange={handleChange} required className="input-field" placeholder="City, State" />
                      </div>
                      <div>
                        <label htmlFor="movingTo" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          <MapPin size={12} className="inline mr-1" /> Moving To *
                        </label>
                        <input type="text" id="movingTo" name="movingTo" value={formData.movingTo} onChange={handleChange} required className="input-field" placeholder="City, State" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="movingDate" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        <Calendar size={12} className="inline mr-1" /> Preferred Date *
                      </label>
                      <input type="date" id="movingDate" name="movingDate" value={formData.movingDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="input-field" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Additional Info (Optional)</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="input-field" placeholder="Type of goods, special handling needs, etc." />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
