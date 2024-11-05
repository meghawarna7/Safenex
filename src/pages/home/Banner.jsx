import React from "react";
import bannerImage from "../../assets/banner/bann.png"; // Path to the banner image

const BannerSection = () => {
  return (
    <div className="space-y-6 p-2">
      {/* Banner Section */}
      <section
        className="w-full h-[400px] md:h-[700px] lg:h-[900px]  text-left flex items-center justify-start text-white mx-auto overflow-hidden rounded-[30px]"
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
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-4 md:p-10"> {/* Centered with flexbox */}
          <div className="ml-5 md:ml-10 p-4 rounded-lg text-left bg-black bg-opacity-50"> {/* Background for text */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Fuel Your Body<br />
              With Healthy <br />
              Choices
            </h1>
            
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-[20px] transition duration-300 mt-4">
              Explore the menu
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default BannerSection;
