import React from "react";

const BookingForm = () => {
  return (
    <div
      className="relative w-full max-w-6xl mx-auto  md:-mt-20 rounded-xl p-8 md:p-12
             bg-[url('/home4-car-book-bg.png')] bg-cover bg-center bg-no-repeat bg-white/80 shadow"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Book a car
      </h2>

      <form className="space-y-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[#ff5a30] font-bold text-sm">
              Select Your Car Type
            </label>
            <select className="w-full border border-slate-200 rounded-md p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff5a30] bg-white">
              <option>Select your car type</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[#ff5a30] font-bold text-sm">
              Pick-up
            </label>
            <select className="w-full border border-slate-200 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5a30] bg-white">
              <option>Santa Monica - 2102 Lincoln Blvd</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[#ff5a30] font-bold text-sm">
              Drop-off
            </label>
            <select className="w-full border border-slate-200 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5a30] bg-white">
              <option>3669 Oliver Street Wedgwood Texas</option>
            </select>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-[#ff5a30] font-bold text-sm">Pick-up</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full border border-slate-200 rounded-md p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff5a30]"
              />
              <select className="w-32 border border-slate-200 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5a30] bg-white">
                <option>12:00 AM</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#ff5a30] font-bold text-sm">Drop-off</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full border border-slate-200 rounded-md p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff5a30]"
              />
              <select className="w-32 border border-slate-200 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff5a30] bg-white">
                <option>12:00 AM</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff5a30] hover:bg-[#e44e28] text-white font-bold py-4 rounded-md shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
