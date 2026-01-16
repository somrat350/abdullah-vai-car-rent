import React from "react";
import Container from "../Container";

const WhyChooseUs = () => {
  return (
    <section className="py-20 font-sans bg-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#ff4d30] font-bold text-lg mb-2 block">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-16">
            Unmatched quality and service for your needs
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-16">
            <Feature
              title="Extensive Fleet Options"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              }
              text="Choose from a wide variety of vehicles to match every preference and budget."
              align="right"
            />
            <Feature
              title="Exceptional Customer Service"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              }
              text="Our team is always ready to assist you, ensuring a smooth and enjoyable experience."
              align="right"
            />
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center py-10 lg:py-0">
            <div className="w-80 h-115 rounded-full shadow-2xl overflow-hidden relative z-0">
              <img
                src="/why-choose-img.jpg"
                alt="Cityscape"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#ff5a30]/5"></div>
            </div>

            <img
              src="/why-choose-car-img.png"
              alt="Red Audi"
              className="absolute bottom-0 w-[90%] max-w-none z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] pointer-events-none"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            <Feature
              title="Convenient Locations"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              text="Easily access our services with multiple convenient pick-up and drop-off points."
              align="left"
            />
            <Feature
              title="Reliability And Safety"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              text="Our cars are maintained to the highest standards for your safety and peace of mind."
              align="left"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

// Reusable Feature Component
const Feature = ({ title, icon, text, align }) => {
  const isRight = align === "right";
  return (
    <div className="group">
      <div
        className={`flex items-center ${
          isRight ? "justify-end gap-4" : "gap-4 mb-3"
        }`}
      >
        {!isRight && (
          <div className="p-3 bg-rose-50 rounded-full text-[#ff5a30] flex-shrink-0">
            {icon}
          </div>
        )}
        <h4 className="text-2xl font-extrabold text-[#0a1d37]">{title}</h4>
        {isRight && (
          <div className="p-3 bg-rose-50 rounded-full text-[#ff5a30] flex-shrink-0">
            {icon}
          </div>
        )}
      </div>
      <div className="border-b border-slate-100 mb-4 w-full ml-auto"></div>
      <p
        className={`text-slate-500 leading-relaxed ${
          isRight ? "text-right" : "text-left"
        } ${!isRight ? "pl-14" : ""}`}
      >
        {text}
      </p>
    </div>
  );
};

export default WhyChooseUs;
