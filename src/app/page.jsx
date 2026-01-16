import AboutGoRant from "@/component/HomePageSections/AboutGoRant";
import Banner from "@/component/HomePageSections/Banner";
import CarRentalSteps from "@/component/HomePageSections/CarRentalSteps";
import DownloadApp from "@/component/HomePageSections/DownloadApp";
import FAQ from "@/component/HomePageSections/FAQ";
import RideBookCTA from "@/component/HomePageSections/RideBookCTA";
import TestimonialSlider from "@/component/HomePageSections/TestimonialSlider";
import WhyChooseUs from "@/component/HomePageSections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans dark:bg-black">
      <Banner />
      <CarRentalSteps />
      <AboutGoRant />
      <RideBookCTA />
      <WhyChooseUs />
      <TestimonialSlider />
      <DownloadApp />
      <FAQ />
    </div>
  );
}
