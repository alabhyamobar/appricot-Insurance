import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-4 text-center">
      {/* Navigation Text */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-6 gap-y-4 font-semibold text-sm md:text-base">
        <p>HOME</p>
        <p>HEALTH INSURANCE</p>
        <p>LIFE INSURANCE</p>
        <p>HOME INSURANCE</p>
        <p>MOTOR INSURANCE</p>
        <p>FIRE INSURANCE</p>
        <p>MARINE INSURANCE</p>
        <p>GROUP HEALTH INSURANCE</p>
        <p>GROUP PERSONAL ACCIDENT</p>
        <p>WORKMEN’S COMPENSATION</p>
        {/* Uncomment this if needed */}
        {/* <p>ABOUT US</p> */}
        <p className="cursor-pointer">Contact Us</p>
        {/* Replace with Link if routing is needed */}
        {/* <Link to="apricoat-insurance/contact-us">Contact Us</Link> */}
      </div>

      {/* Company Name */}
      <div className="mt-8 font-bold text-lg text-white uppercase tracking-wide">
        Apricoat Insurance & Marketing Pvt. Ltd.
      </div>

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
