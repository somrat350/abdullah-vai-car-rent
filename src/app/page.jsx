import AboutGoRant from "@/component/HomePageSections/AboutGoRant";
import Banner from "@/component/HomePageSections/Banner";
import CarRentalSteps from "@/component/HomePageSections/CarRentalSteps";
import RideBookCTA from "@/component/HomePageSections/RideBookCTA";
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
    </div>
  );
}
