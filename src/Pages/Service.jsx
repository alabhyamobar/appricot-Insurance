import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicesProvider } from "../Context/ServiceContext";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const insuranceLogos = [
  "https://seeklogo.com/images/L/lic-of-india-logo-FA4A9AD73C-seeklogo.com.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/New_India_Assurance.svg/1200px-New_India_Assurance.svg.png",
  "https://www.nivabupa.com/home-page-images/logo-bar-images/Niva-Bupa-Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jBP-I3-tkKnLEeHBaDPpdFRz880oRaTiDA&s",
  "https://media.licdn.com/dms/image/v2/C561BAQFDUO7CV_koxA/company-background_10000/company-background_10000/0/1584507298872/icici_lombard_general_insurance_company_limited_cover?e=2147483647&v=beta&t=zbXCOm9KGNHS_8Q-YwMknrIaF3nzcD-ZvVYm_NBVlAw",
 "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/United_India_Insurance.svg/2560px-United_India_Insurance.svg.png",
  "https://tse4.mm.bing.net/th?id=OIP.49ykzwrn1WMg5AtWGl-kYQHaD8&pid=Api&P=0&h=180",
  "https://images.seeklogo.com/logo-png/46/2/digit-insurance-logo-png_seeklogo-465810.png"
];

const Services = ({ refProp }) => {
  const { service } = useContext(ServicesProvider);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Smooth infinite logo scroll
      const totalWidth = sliderRef.current.scrollWidth / 3;
      animation.current = gsap.to(sliderRef.current, {
        x: `-${totalWidth}`,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    // Hover effect to pause/resume animation
    const sliderElement = sliderRef.current;
    const stopSlider = () => {
      if (animation.current) {
        animation.current.pause();
      }
    };
    const resumeSlider = () => {
      if (animation.current) {
        animation.current.resume();
      }
    };

    sliderElement.addEventListener("mouseenter", stopSlider);
    sliderElement.addEventListener("mouseleave", resumeSlider);

    return () => {
      sliderElement.removeEventListener("mouseenter", stopSlider);
      sliderElement.removeEventListener("mouseleave", resumeSlider);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (refProp) refProp.current = el;
      }}
      className="bg-gray-50 py-16 px-6 md:px-20 text-center"
    >
      <h2 className="text-4xl font-bold text-green-900 mb-4">
        Our Insurance Services
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        We offer a wide range of insurance solutions to protect what matters
        most to you. From maritime operations to property protection, we've got
        you covered.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {service.slice(0, 4).map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-green-50 text-2xl rounded-md mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-green-800 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-md">
        <Link to="apricoat-insurance/allserivces">View all Services</Link>
      </button>

      {/* Partners Logo Slider */}
      <div className="mt-20">
        <h3 className="text-4xl font-bold text-green-900 mb-10">Our Partners</h3>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-xl">Meet our trusted partners</p>
        <div className="overflow-hidden relative">
          <div
            ref={sliderRef}
            className="flex gap-16 w-max items-center px-4 will-change-transform"
          >
            {insuranceLogos
              .concat(insuranceLogos)
              .concat(insuranceLogos)
              .map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-60 h-28 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="Insurance Partner Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
