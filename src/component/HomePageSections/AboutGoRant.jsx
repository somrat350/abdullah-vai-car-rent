import Image from "next/image";
import React from "react";
import Container from "../Container";

const AboutGoRant = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <span className="text-[#ff4d30] font-bold text-lg mb-2 block">
              About Us
            </span>
            <h2 className="text-4xl font-extrabold text-[#0a1d37] mb-6 leading-tight">
              Welcome To GoRant
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We provide a seamless and enjoyable car rental experience,
              offering quality vehicles and trusted services to our valued
              customers worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="bg-[#ff4d30] p-1 rounded text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-slate-600 font-medium">
                  We are a trusted name
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#ff4d30] p-1 rounded text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-slate-600 font-medium">
                  Have a larger stock
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#ff4d30] p-1 rounded text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-slate-600 font-medium">
                  We deal in all brands
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#ff4d30] p-1 rounded text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-slate-600 font-medium">
                  Worldwide locations
                </span>
              </div>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png"
                alt="Signature"
                className="h-16 opacity-80 grayscale brightness-50"
              />
              <div className="h-12 w-px bg-slate-200"></div>
              <div>
                <h5 className="text-xl font-bold text-[#0a1d37]">
                  Robertho Garcia
                </h5>
                <p className="text-slate-400 text-sm">President</p>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="relative w-full h-50 md:h-full ">
            <Image
              src="/about.png"
              alt="car"
              fill
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutGoRant;
