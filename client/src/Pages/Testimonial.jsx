import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { TestimonialsProvider } from '../Context/TestimonialContext';

const StarRating = ({ rating }) => (
  <div className="flex text-yellow-400 mb-2">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'fill-current' : 'text-gray-300'} />
    ))}
  </div>
);

const Testimonials = ({ refProp }) => {
  const { testimonials, addTestimonial } = useContext(TestimonialsProvider);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    rating: 5,
  });

  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial(formData);
    setFormData({ name: '', role: '', message: '', rating: 5 });
    setHoverRating(0);
  };

  

  return (
    <section ref={refProp} className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-green-900 mb-4">What Our Clients Say</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Hear from the businesses and professionals who trust Apricoat Insurance.
      </p>

      {/* Testimonials Display */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-16">
        {testimonials.slice(0, 4).map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl p-6 shadow-sm text-left hover:shadow-md transition"
          >
            <StarRating rating={t.rating} />
            <p className="text-gray-700 italic mb-4">"{t.message}"</p>
            <h4 className="font-semibold text-green-900">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="max-w-2xl mx-auto text-left bg-green-50 p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">Share Your Experience</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-green-900 mb-1">Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-green-900 mb-1">Profession / Company</label>
            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none"
              placeholder="Business Owner, SafeGuard Pvt. Ltd."
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-green-900 mb-1">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none"
              placeholder="Share your experience with Apricoat Insurance..."
              rows={4}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-green-900 mb-2">Rating</label>
            <div className="flex space-x-1 text-2xl text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer transition ${
                    (hoverRating || formData.rating) >= star ? 'fill-current' : 'text-gray-300'
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900 w-full transition"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
