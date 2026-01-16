"use client";

import { useState } from "react";
import Container from "../Container";

const cars = [
  {
    name: "Toyota Alphard",
    brand: "toyota",
    price: "$50.00 / Day",
    image: "/offer-toyota.png",
    model: "2017",
    transmission: "Automatic",
    mileage: "20kmpl",
  },
  {
    name: "Nissan 370Z",
    brand: "nissan",
    price: "$75.00 / Day",
    image: "/nissan-offer.png",
    model: "2018",
    transmission: "Automatic",
    mileage: "18kmpl",
  },
  {
    name: "Audi Q3",
    brand: "audi",
    price: "$45.00 / Day",
    image: "/audi-offer.png",
    model: "2019",
    transmission: "Automatic",
    mileage: "22kmpl",
  },
  {
    name: "Mercedes-Benz C-Class",
    brand: "mercedes",
    price: "$65.00 / Day",
    image: "/marcedes-offer.png",
    model: "2020",
    transmission: "Automatic",
    mileage: "19kmpl",
  },
];

const brands = [
  { label: "All Brands", value: "all" },
  { label: "Nissan", value: "nissan" },
  { label: "Toyota", value: "toyota" },
  { label: "Audi", value: "audi" },
  { label: "Mercedes", value: "mercedes" },
];

export default function Cars() {
  const [activeBrand, setActiveBrand] = useState("all");

  const filteredCars =
    activeBrand === "all"
      ? cars
      : cars.filter((car) => car.brand === activeBrand);

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-[#ff4d30] font-bold text-lg mb-2 block">
              Come With
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-16">
              Hot Offers
            </h2>
          </div>

          {/* Brand Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {brands.map((brand) => (
              <button
                key={brand.value}
                onClick={() => setActiveBrand(brand.value)}
                className={`h-12 px-8 -skew-x-12 flex items-center transition-all
                ${
                  activeBrand === brand.value
                    ? "bg-[#ff5a30]"
                    : "bg-black hover:bg-gray-800"
                }`}
              >
                <span className="skew-x-12 text-white font-bold text-sm uppercase">
                  {brand.label}
                </span>
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {filteredCars.map((car) => (
              <div
                key={car.name}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col text-center"
              >
                <div className="h-48 flex items-center justify-center mb-6">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {car.name}
                </h3>

                <p className="text-[#ff5a30] font-bold text-lg mb-4">
                  {car.price}
                </p>

                <div className="flex justify-center gap-4 text-sm text-gray-500 mb-8">
                  <span>{car.model}</span>
                  <span>{car.transmission}</span>
                  <span>{car.mileage}</span>
                </div>

                <div className="mt-auto flex">
                  <button className="flex-1 bg-black text-white py-3 font-bold text-sm uppercase hover:bg-gray-800 transition">
                    Rent Car
                  </button>
                  <button className="flex-1 bg-[#ff5a30] text-white py-3 font-bold text-sm uppercase hover:bg-[#e04a20] transition">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className=" bg-primary text-white font-bold px-10 py-3 rounded-lg mt-10 transition-all hover:bg-[#e04a20] hover:-translate-y-1 mx-auto block">
            View All Cars
          </button>
        </div>
      </Container>
    </section>
  );
}
