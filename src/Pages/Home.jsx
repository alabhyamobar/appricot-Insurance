import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Home = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className="w-full  h-screen bg-cover bg-center bg-no-repeat mt-16"
      style={{
        backgroundImage: `url("https://i.ibb.co/5ySjBfX/Untitled-design.png")`,
      }}
    >
      <div className="w-full h-[100%] pt-6 sm:pt-10 md:pt-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-black/50 ">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white pb-3 sm:pb-5 max-w-full mt-50">
          <TypeAnimation
            sequence={[
              "Apricoat Insurance Marketing Pvt. Ltd.",
              3000,
              "",
              2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white pb-3 sm:pb-4">
          An Insurance for every Possibility
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white pb-6 max-w-2xl leading-relaxed">
          Specialized insurance solutions for marine, fire, and more. Get peace
          of mind with Apricoat's comprehensive coverage options.
        </p>

        <div className="flex flex-wrap gap-4 pb-6">
          <Link to="/apricoat-insurance/quotes">
            <button className="w-36 sm:w-40 h-11 bg-orange-500 text-white font-semibold text-base rounded-md hover:bg-orange-600 transition duration-300">
              Get Quotes
            </button>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
