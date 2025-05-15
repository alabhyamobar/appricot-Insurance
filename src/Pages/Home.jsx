import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Home = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className='w-full h-screen bg-cover bg-center bg-no-repeat mt-16'
      style={{
        backgroundImage: `url("https://media-hosting.imagekit.io/86e71e089a21481b/Untitled%20design.png?Expires=1841977929&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y3m5gfuMwMDXtCf4BDDVRfPEb-8YP-K0s9Uvvb9o8e2wJZSybc7rJNcHjDuHTWTzQgWgExK7FdxTF-3pQWaJ4Qy0QUb3mG0dM5tLka~8Fs2InmxzB5M4O2KTqzzCFTthvH9DU2qRzGXq59JMYIO9kYNV5UIwuUeLZCcniwdN75wdakOMo~m3oWiMLrBvY3u6LwAXBbDbKCTfETj6FQocdEjjy9-o3F6MvFrVIYDDWt7GvxWpVSrvRvV~OczLXVSMyH7OnZYkPjHKv1Ui9XwIsl~LYLpFWKqCaHbWLNCy-RsrnlDOyOn2c5sTvdbFXJy50edO5cRA-MEmcyzkUis8Lg__ ")`
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 bg-black/10 backdrop-brightness-90 ">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white pb-3 sm:pb-5 max-w-full">
          <TypeAnimation
            sequence={["Apricoat Insurance Marketing Pvt. Ltd.", 3000, "", 2000]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white pb-3 sm:pb-4">
          Protect what matters
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white pb-6 max-w-2xl leading-relaxed">
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
