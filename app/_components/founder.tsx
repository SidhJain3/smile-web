import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FounderStories: React.FC = () => {
  return (
    <section
      id="founders"
      className="bg-[#121212] text-white px-6 md:px-20 py-16"
    >
      {/* Top Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* Right Heading (shown above on mobile) */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl md:text-right font-light">Our Journey</h2>
          <p className="text-3xl md:text-5xl md:text-right italic text-[#4EBCA5]">
            Founder Stories
          </p>
        </div>

        {/* Left Text Section */}
        <div className="order-2 md:order-1">
          <p className="text-lg leading-relaxed">
            A symbiotic network of{" "}
            <span className="text-[#4EBCA5]">students</span>,{" "}
            <span className="text-[#4EBCA5]">founders</span>, and{" "}
            <span className="text-[#4EBCA5]">professional mentors</span> driving
            cultural change in mental health support
          </p>
        </div>
      </div>

      {/* Founder Card */}
      <div className="mt-12 mx-6 md:mx-12 bg-white text-black rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
          <img
            src="/new/Group 40063 (1).png"
            alt="Founder"
            className="rounded-lg w-3/4 sm:w-2/3 md:w-full max-w-[250px] md:max-w-full h-auto bg-[#E1D7CE] object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="uppercase text-xl font-semibold text-gray-500">
            Co-Founder
          </p>
          <h3 className="text-4xl font-medium mt-1">NAVIN VENKAT</h3>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            “I only grasped the <span className="italic">importance</span> of
            mental health in my third year of college. I wanted to make sure
            that <span className="italic">no-one</span> went through the
            struggles I did.”
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6">
            <button className="flex items-center justify-center gap-2 bg-black text-white text-lg px-5 py-3 rounded-xl hover:bg-gray-800 transition">
              Read More
              <img
                src="/new/Group 40056.png"
                alt="arrow"
                className="w-7 h-7"
              />
            </button>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center md:ml-auto gap-3">
              <button className="p-2 rounded-full border bg-black text-white border-gray-300 hover:bg-gray-200 transition">
                <ArrowLeft size={22} />
              </button>
              <button className="p-2 rounded-full border bg-black text-white border-gray-300 hover:bg-gray-200 transition">
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStories;



