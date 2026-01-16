import Banner from "@/component/HomePageSections/Banner";
import CarRentalSteps from "@/component/HomePageSections/CarRentalSteps";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans dark:bg-black">
      <Banner />
      <CarRentalSteps />
    </div>
  );
}
