import React from "react";
import Container from "../Container";

export default function DownloadApp() {
  return (
    <section className="py-24 bg-[#ff5a30] text-white px-6">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Download Our App
            </h2>
            <p className="text-lg mb-6 max-w-md">
              Book your ride anytime, anywhere! Get the Nova Ride app for iOS
              and Android and enjoy seamless car rental experience on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-white text-[#ff5a30] font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
              >
                App Store
              </a>
              <a
                href="#"
                className="bg-white text-[#ff5a30] font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
              >
                Google Play
              </a>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="/image3.png"
              alt="Mobile App Preview"
              className="w-full md:w-full mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
