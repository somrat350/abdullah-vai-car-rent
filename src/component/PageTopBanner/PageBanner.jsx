import React from "react";

const PageBanner = () => {
  return (
    <section className="py-20 h-100 relative w-full  bg-[url('/carsPageBanner.jpg')] bg-fixed bg-cover bg-center flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-[#ff5a30] text-sm font-bold uppercase tracking-[0.2em] mb-4">
          ALL CARS
        </p>
        <h2 className="text-white text-4xl font-extrabold mb-6">Cars List</h2>
      </div>
    </section>
  );
};

export default PageBanner;
