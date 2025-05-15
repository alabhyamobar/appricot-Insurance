import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = ({ refProp }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const whyChooseTextRef = useRef(null);
  const whyChooseImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        whyChooseTextRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whyChooseTextRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        whyChooseImageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whyChooseImageRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (refProp) refProp.current = el;
      }}
      className="bg-white flex flex-col justify-center px-6 md:px-20 py-10"
    >
      {/* Main About Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div ref={textRef} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-6">
            Your Go-To Insurance Provider
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            At Apricoat Insurance, we are dedicated to providing our clients with the highest level of customer service and the best insurance products available.
          </p>
          <p className="text-gray-700 text-lg">
            Our team of experts is here to help you navigate the complex world of insurance and to find the coverage that meets your needs and budget. We offer a wide range of products, including motor, home, health, life and corporate insurance. Explore our website to learn more about our services and get in touch with us to get started.
          </p>
        </div>

        <div ref={imageRef} className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg h-full">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
              alt="Office team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row items-center gap-10">
        <div ref={whyChooseTextRef} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-6">
            Why Choose Us
          </h2>
          <ul className="text-gray-700 space-y-4 text-lg list-disc list-inside">
            <li>Trusted by hundreds of clients.</li>
            <li>Personalized insurance plans tailored to your needs.</li>
            <li>24/7 customer support.</li>
            <li>Experienced advisors to guide you every step of the way.</li>
            <li>Customer- Centered Services.</li>
            <li>Industry Expertise.</li>
            <li>Fast and Hassle free claim assistance.</li>
            <li>Comprehensive coverage options at competitive prices.</li>
          </ul>

          <div className="mt-10">
            <button className="bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-900 transition">
              <Link to="apricoat-insurance/team">Learn More About Us</Link>
            </button>
          </div>
        </div>

        <div ref={whyChooseImageRef} className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg h-full">
            <img
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2069&auto=format&fit=crop"
              alt="Why Choose Us"
              className="w-[800px] h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
