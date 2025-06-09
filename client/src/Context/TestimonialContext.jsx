import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TestimonialsProvider = createContext();

const TestimonialsContext = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/testimonials');
      setTestimonials(res.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const addTestimonial = async (testimonial) => {
    try {
      const res = await axios.post('http://localhost:5000/api/testimonials', testimonial);
      setTestimonials((prev) => [res.data, ...prev]);
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <TestimonialsProvider.Provider value={{ testimonials, addTestimonial }}>
      {children}
    </TestimonialsProvider.Provider>
  );
};


export default TestimonialsContext;