import React from "react";
import Container from "../Container";
import Image from "next/image";
import BookingForm from "./BookingForm";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-10 h-full md:h-[80vh] items-center justify-between">
          {/* <!-- Left Content Column --> */}
          <div className="flex flex-1 flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full w-fit">
                <span className="text-xs font-extrabold uppercase tracking-widest">
                  Plan your trip now
                </span>
              </div>
              <h1 className="text-3xl lg:text-6xl font-black  text-gray-900">
                Save <span className="text-primary">big</span> with our car
                rental
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="flex items-center gap-2 bg-primary text-white text-lg font-bold px-10 py-4 rounded-lg shadow-xl shadow-primary/30 hover:bg-red-700 transition-all hover:-translate-y-1">
                Book Ride
              </button>
              <button className=" bg-[#1a0f0f] text-white text-lg font-bold px-10 py-4 rounded-lg hover:bg-gray-900  transition-all hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>

          {/* <!-- Right Image Column --> */}
          <div className="flex-1 relative order-1 lg:order-2 flex justify-center items-center w-full h-full bg-[url('/banner_image.png')] bg-contain bg-right bg-no-repeat">
            <Image
              src="/banner_car.png"
              alt="car"
              fill
              className="relative z-10 w-full h-fit object-contain"
            />
          </div>
        </div>

        <BookingForm />
      </Container>
    </>
  );
};

export default Banner;
