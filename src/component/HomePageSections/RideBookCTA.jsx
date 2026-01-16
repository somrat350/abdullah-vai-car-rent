import React from "react";

const RideBookCTA = () => {
  return (
    <section className="py-20 relative w-full  bg-[url('/rideCTNbg.jpg')] bg-fixed bg-cover bg-center flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-[#ff5a30] text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Rent Now
        </p>
        <h2 className="text-white text-4xl font-extrabold mb-6">
          Book Auto Rental
        </h2>
        <p className="text-white mb-4 md:mb-6">
          Save big with our cheap car rental! Top Airports. Local Suppliers.
          24/7 Support.
        </p>
        <p className="text-white mb-6 font-medium text-xl">
          Need any help? (431) 529 2093
        </p>

        {/* Call to Action */}
        <button className="bg-[#ff5a30] hover:bg-[#e44e28] text-white font-bold py-3 px-6 rounded-md shadow-lg transition-transform transform hover:-translate-y-1 active:translate-y-0">
          Book Now
        </button>
      </div>
    </section>
  );
};
export default RideBookCTA;
