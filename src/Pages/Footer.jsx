import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-4 text-center">
      {/* Navigation Text */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-6 gap-y-4 font-semibold text-sm md:text-base">
        {/* Uncomment this if needed */}
        {/* <p>ABOUT US</p> */}
        {/* Replace with Link if routing is needed */}
        {/* <Link to="apricoat-insurance/contact-us">Contact Us</Link> */}
      </div>

      {/* Company Name */}
      <div className="mt-8 font-bold text-4xl text-white uppercase tracking-wide md:text- xl">
        Apricoat Insurance & Marketing Pvt. Ltd. 
      </div>
<Link to="/apricoat-insurance/contact">
          <button
            className="mt-4 bg-green-600  text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Contact Us
          </button>
        </Link>
      {/* Contact Info */}
      <div className="mt-6 text-green-100 text-sm leading-relaxed max-w-4xl mx-auto text-center space-y-2 px-4">
        <p><span className="font-semibold text-white">Contact Info -</span> +91 - 88 268 56414, +91 - 98 390 32898</p>
        <p><span className="font-semibold text-white">Landline -</span> 0512 316 4926</p>
        <p><span className="font-semibold text-white">Off. Add. -</span> Office No. 23, RPS Plaza, Near Cylinder Chauraha, Keshav Puram,
          Avas Vikas No. 1 Kalyanpur, Kanpur - 208017</p>
        <p><span className="font-semibold text-white">Email id -</span> apricoatinsurancemarketting@gmail.com, support@apricoat.in</p>
        
      </div>
    </footer>
  );
};

export default Footer;
