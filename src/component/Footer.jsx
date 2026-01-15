import React from "react";
import Container from "./Container";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div class="bg-[#1a0f0f] text-white py-20">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-1">
            <div className=" cursor-pointer">
              <h2 className="text-xl font-extrabold tracking-tight">
                <span className="text-[#ff5c30]">Go</span>Rent
              </h2>
            </div>
            <p class="text-gray-400 leading-relaxed mb-8">
              Redefining the car rental experience through seamless digital
              booking and premium vehicle selection.
            </p>
            <div class="flex gap-4">
              <div class="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary cursor-pointer transition-all">
                <FaFacebookF />
              </div>
              <div class="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary cursor-pointer transition-all">
                <FaXTwitter />
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-6">Our Company</h4>
            <ul class="space-y-4 text-gray-400">
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Sustainability
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-6">Support</h4>
            <ul class="space-y-4 text-gray-400">
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-6">Newsletter</h4>
            <p class="text-gray-400 mb-6">
              Get special offers and rental updates.
            </p>
            <div class="flex">
              <input
                class="bg-white/5 border-none rounded-l-lg px-4 h-12 w-full focus:ring-0 focus:ring-primary outline-none"
                placeholder="Email address"
                type="email"
              />
              <button class="bg-primary px-4 rounded-r-lg h-12 bg-[#ff5c30] hover:bg-[#ad3615] transition-colors">
                <span class="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div class="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2025 GoRent International Ltd. All rights reserved.</p>
        <div class="flex gap-8">
          <span>Location: Global</span>
          <span>Language: English (US)</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
