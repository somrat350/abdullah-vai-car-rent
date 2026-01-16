// components/CarRentalSteps.js
import React from "react";
import Container from "../Container";

const steps = [
  {
    title: "Select Car",
    description:
      "Choose your ideal car from our wide selection and get ready for a smooth, fun ride.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#ff5a30]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    bgShape: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  },
  {
    title: "Contact Operator",
    description:
      "Reach out to our friendly operators to confirm your booking and get any help you need.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#ff5a30]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    bgShape: "rounded-[70%_30%_30%_70%/70%_70%_30%_30%]",
  },
  {
    title: "Let's Drive",
    description:
      "Pick up your car and enjoy a safe, comfortable drive to your destination.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#ff5a30]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 17a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    bgShape: "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  },
];

const CarRentalSteps = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h3 className="text-xl text-gray-600 font-medium mb-2">
            Plan your trip now
          </h3>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16">
            Quick & easy car rental
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center text-center relative z-10"
              >
                <div
                  className={`w-32 h-32 bg-[#FFF1EB] ${step.bgShape} flex items-center justify-center mb-6 shadow-[0_4px_6px_rgba(255,90,48,0.1)]`}
                >
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm max-w-xs">
                  {step.description}
                </p>

                {/* Dotted line for first two steps only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-30 w-1/2 border-t-2 border-dotted border-gray-300 -translate-y-1/2 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CarRentalSteps;
