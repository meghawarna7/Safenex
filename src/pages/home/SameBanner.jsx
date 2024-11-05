import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import bannerImage from "../../assets/banner/samebanner.png"; // Path to the banner image

const SameBanner = () => {
  return (
    <div className="space-y-6 p-2">
      {/* Banner Section */}
      <section
        className="w-full h-[400px] md:h-[700px] lg:h-[900px] text-left flex items-center justify-start text-white mx-auto overflow-hidden rounded-[30px]"
        style={{
          margin: "0", // No margin to ensure proper fit
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover", // Use cover to ensure the full image is displayed
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevent image from repeating
          borderRadius: "30px", // Ensure border radius is applied directly
        }}
      >
        {/* Center Content */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-4 md:p-10">
          {/* Main Title */}
          <div className="ml-5 mb-6 md:mb-12 mt-0 md:ml-10 p-4 rounded-lg text-left bg-opacity-50">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
              Your Wellness. <br />
              Our Passion.
            </h1>
          </div>

          {/* Sub Title and Button */}
          <div className="ml-5 md:ml-10 p-4 rounded-[20px] text-left bg-white bg-opacity-20 md:p-10 mt-10"> {/* Added mt-10 for bottom margin */}
            <h5 className="text-lg md:text-2xl text-3xl font-bold md:pr-10">
              Golden Superfruit<br /> Delight Bowl
            </h5>
            <button className="bg-transparent text-white font-semibold px-3 md:px-4 py-1 border border-white rounded-[20px] hover:bg-green-900 transition duration-300 mt-2 flex items-center">
              Order Now
              <FaArrowRight className="ml-1 text-white" /> {/* Right arrow icon */}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SameBanner;
