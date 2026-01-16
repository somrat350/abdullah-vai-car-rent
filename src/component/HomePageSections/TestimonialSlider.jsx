"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../Container";

const testimonials = [
  {
    name: "Floyd Miles",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/150?u=floyd",
    rating: 5,
    content:
      "Renting a car from Nova Ride was a great decision. I got a reliable and comfortable vehicle, and the prices.",
  },
  {
    name: "Annette Black",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/150?u=annette",
    rating: 5,
    content:
      "Nova Ride made car rental super easy. The service is top-notch and the vehicles are always in perfect condition.",
  },
  {
    name: "Jenny Wilson",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/150?u=jenny",
    rating: 5,
    content:
      "I had an amazing experience renting from Nova Ride. Everything was smooth and fast, highly recommended!",
  },
  {
    name: "Robert Fox",
    role: "Business Analyst",
    avatar: "https://i.pravatar.cc/150?u=robert",
    rating: 5,
    content:
      "The cars are clean, service is excellent, and booking is super convenient. Nova Ride is my go-to rental service.",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    avatar: "https://i.pravatar.cc/150?u=courtney",
    rating: 5,
    content:
      "Top-notch customer service and a wide selection of vehicles. Renting a car has never been this easy!",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#ff4d30] font-bold text-lg mb-2 block">
              Testimonials
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-16">
              What our customers are saying
            </h2>
          </div>

          <Swiper
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-slate-100 p-10 rounded-3xl shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="flex text-[#ff5a30] gap-1 mb-6 text-xl">
                      {Array(item.rating)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {item.content}
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-6 flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="text-xl font-extrabold text-[#0a1d37]">
                        {item.name}
                      </h5>
                      <p className="text-slate-400 text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
