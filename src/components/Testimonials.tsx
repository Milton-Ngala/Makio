import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  review: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    review: "Absolutely incredible experience! The guides were knowledgeable, the wildlife sightings were spectacular, and the accommodations exceeded expectations. Makio Tours made our dream safari come true.",
    rating: 5,
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    review: "Professional service from start to finish. We saw the Big Five, witnessed the Great Migration, and learned so much about African culture. The attention to detail was remarkable throughout our journey.",
    rating: 5,
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    review: "Best investment we ever made! The safari exceeded all expectations. Our guide was fantastic, and the wildlife encounters were life-changing. Already planning our next adventure with Makio Tours.",
    rating: 5,
    date: "January 2024"
  }
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoRotating]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoRotating(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoRotating(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoRotating(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            What Our <span className="text-safari-green">Travelers Say</span>
          </h2>
          <p className="text-xl font-opensans text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their unforgettable safari experiences.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoRotating(false)}
          onMouseLeave={() => setIsAutoRotating(true)}
        >
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-lg">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-safari-green opacity-50" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-lg lg:text-xl font-opensans text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-montserrat font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="font-opensans text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="font-opensans text-sm text-safari-green">
                    {testimonials[currentTestimonial].date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-safari-green hover:text-white transition-all duration-300 group"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-safari-green hover:text-white transition-all duration-300 group"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-safari-green scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">98%</div>
            <div className="font-opensans text-gray-600">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">4.9/5</div>
            <div className="font-opensans text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">500+</div>
            <div className="font-opensans text-gray-600">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">85%</div>
            <div className="font-opensans text-gray-600">Repeat Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;