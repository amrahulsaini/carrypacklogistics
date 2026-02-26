'use client';

import { useState } from 'react';
import { Truck, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show detailed error with status code
        const errorMessage = `Error ${response.status}: ${data.error || 'Failed to submit lead'}. ${JSON.stringify(data)}`;
        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        movingFrom: '',
        movingTo: '',
        movingDate: '',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Truck className="mx-auto mb-6" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Quote</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tell us about your moving requirements and get a customized quote within 24 hours
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-2">
                Your request has been submitted successfully.
              </p>
              <p className="text-gray-600 mb-6">
                We've sent a confirmation email to your inbox. Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary btn-lg"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h2>
                <p className="text-gray-600">
                  Fill in the details below and our logistics experts will get back to you with a customized solution.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="input-field"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Moving Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="movingFrom" className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Moving From *
                    </label>
                    <input
                      type="text"
                      id="movingFrom"
                      name="movingFrom"
                      value={formData.movingFrom}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label htmlFor="movingTo" className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Moving To *
                    </label>
                    <input
                      type="text"
                      id="movingTo"
                      name="movingTo"
                      value={formData.movingTo}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="movingDate" className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-1" />
                    Preferred Moving Date *
                  </label>
                  <input
                    type="date"
                    id="movingDate"
                    name="movingDate"
                    value={formData.movingDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                    placeholder="Tell us more about your requirements (type of goods, special handling, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary btn-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Need immediate assistance?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Call us directly or send an email for urgent requirements
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+918949437619"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    📞 +91 89494 37619
                  </a>
                  <a
                    href="mailto:sales@carrypacklogistics.com"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    📧 sales@carrypacklogistics.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
