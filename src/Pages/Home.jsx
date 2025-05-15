import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Home = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className='w-full h-screen bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url("https://media-hosting.imagekit.io/a485e808753447aa/apricoat%20home%20page%20image(1).png?Expires=1841826389&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bzacflDWi5yn8zndA2UcHnBKSLBvZAsgDeSU8zYq378ko0Cw3ZheMopZ9N2F55hr17dZUYUldOLM-wI82FSC~50lMRFgXxxgym7eemy7u2at75TJ5rvpy0leOjtkL1coZYGCwEHqMZGB~6RSHDHNlAmFIOjfyi~-M8tSkm3jo3~oge5y9eXcBjsgo0TJge0mqwLM~IIhDVsxUSxPfOqoxQJ5WKPAltV7SWtYtqo29~zFzdt4lHh1Dc76uG8EdGIitr9urwl693u9x-A7IUwBhfyhwmG66TmHbV6x9KiaVzDwXFsia09uFqCbq6ckIkYR3zew90ixdHdnW9KMK4NEaw__")`
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 bg-black/40 backdrop-brightness-90">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-green-400 pb-3 sm:pb-5 max-w-full">
          <TypeAnimation
            sequence={["Apricoat Insurance Marketing Pvt. Ltd.", 3000, "", 2000]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-100 pb-3 sm:pb-4">
          Protect what matters
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-green-100 pb-6 max-w-2xl leading-relaxed">
          Specialized insurance solutions for marine, fire, and more. Get peace
          of mind with Apricoat's comprehensive coverage options.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="/apricoat-insurance/quotes">
            <button className="w-36 sm:w-40 h-11 bg-orange-500 text-white font-semibold text-base rounded-md hover:bg-orange-600 transition duration-300">
              Get Quotes
            </button>
          </Link>

          <a
            href="/apricoatinsurance/Apricoat_Insurance.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-44 sm:w-52 h-11 bg-orange-500 text-white font-semibold text-base rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaDownload className="text-white" />
            View Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
