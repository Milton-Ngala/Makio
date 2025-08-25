import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  packageType: string;
  startDate: string;
  endDate: string;
  guests: number;
  specialRequests: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    packageType: '',
    startDate: '',
    endDate: '',
    guests: 2,
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<BookingForm>>({});

  const packages = [
    'Maasai Mara Classic Safari',
    'Amboseli & Tsavo Adventure',
    'Lake Nakuru & Naivasha',
    'Ultimate Africa Safari',
    'Custom Safari Package'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingForm> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.packageType) newErrors.packageType = 'Please select a package';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (formData.guests < 1) newErrors.guests = 'At least 1 guest is required';

    // Validate date range
    if (formData.startDate && formData.endDate) {
      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today) {
        newErrors.startDate = 'Start date cannot be in the past';
      }
      if (endDate <= startDate) {
        newErrors.endDate = 'End date must be after start date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 0 : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof BookingForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create WhatsApp message
      const message = `
Hi! I'd like to book a safari with the following details:

📧 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🦁 Package: ${formData.packageType}
📅 Start Date: ${formData.startDate}
📅 End Date: ${formData.endDate}
👥 Number of Guests: ${formData.guests}
📝 Special Requests: ${formData.specialRequests || 'None'}

Please send me more information about this package and the booking process.
      `;
      
      const encodedMessage = encodeURIComponent(message.trim());
      window.open(`https://wa.me/254774156869?text=${encodedMessage}`, '_blank');
      
      setSubmitStatus('success');
          
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          packageType: '',
          startDate: '',
          endDate: '',
          guests: 2,
          specialRequests: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Book Your <span className="text-safari-green">Safari Adventure</span>
          </h2>
          <p className="text-xl font-opensans text-gray-600 max-w-3xl mx-auto">
            Ready to experience the magic of Africa? Fill out the form below and we'll help you 
            plan the perfect safari adventure tailored to your preferences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Form Side */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label htmlFor="packageType" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                      Safari Package *
                    </label>
                    <select
                      id="packageType"
                      name="packageType"
                      value={formData.packageType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all ${
                        errors.packageType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a safari package</option>
                      {packages.map((pkg) => (
                        <option key={pkg} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                    {errors.packageType && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.packageType}
                      </p>
                    )}
                  </div>

                  {/* Date Range */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 border rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all ${
                          errors.startDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.startDate && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.startDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="endDate" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                        End Date *
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        min={formData.startDate || new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 border rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all ${
                          errors.endDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.endDate && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.endDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      min="1"
                      max="20"
                      className={`w-full px-4 py-3 border rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all ${
                        errors.guests ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.guests && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.guests}
                      </p>
                    )}
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-opensans font-semibold text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-opensans focus:ring-2 focus:ring-safari-green focus:border-transparent transition-all resize-none"
                      placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-opensans font-semibold transition-all duration-300 flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-safari-green hover:bg-green-700 transform hover:scale-105'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Booking Sent Successfully!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <AlertCircle className="h-5 w-5 mr-2" />
                        Try Again
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Send Booking Request
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="bg-safari-green p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-montserrat font-bold mb-6">Why Book With Us?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-4 mt-1 text-sunset-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-opensans font-semibold mb-2">Instant Response</h4>
                      <p className="font-opensans text-gray-200">Get a personalized quote within 24 hours of your booking request.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-4 mt-1 text-sunset-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-opensans font-semibold mb-2">Flexible Packages</h4>
                      <p className="font-opensans text-gray-200">All packages can be customized to match your preferences and budget.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-4 mt-1 text-sunset-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-opensans font-semibold mb-2">Expert Guidance</h4>
                      <p className="font-opensans text-gray-200">Our team will help you choose the perfect safari experience.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-4 mt-1 text-sunset-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-opensans font-semibold mb-2">Best Price Guarantee</h4>
                      <p className="font-opensans text-gray-200">We offer competitive pricing with no hidden fees.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-montserrat font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-sunset-gold" />
                      <span className="font-opensans">+254 763 760 091</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-sunset-gold" />
                      <span className="font-opensans">info@makiotours.com</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-3 text-sunset-gold" />
                      <span className="font-opensans">WhatsApp Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;