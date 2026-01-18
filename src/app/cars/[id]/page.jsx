import { CheckCircle, PhoneCall } from "lucide-react";
import Container from "@/component/Container";
import { cars } from "../../../../public/cars";

const page = ({ params }) => {
  const id = Number(params.id);

  console.log(id);
  const car = cars.find((c) => c.id === id);

  return (
    <div>
      {/* Page Banner  */}
      <section
        className={
          "py-20 h-100 relative w-full  bg-[url('/marcedes-offer.png')] bg-fixed bg-cover bg-center flex items-center justify-center"
        }
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <p className="text-[#ff5a30] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            All Info
          </p>
          <h2 className="text-white text-4xl font-extrabold mb-6">
            Car Details
          </h2>
        </div>
      </section>

      <section className="py-20">
        <Container>
          {/* Top Section */}
          <div className="grid lg:grid-cols-3 gap-8 justify-between items-start">
            {/* Price Card */}
            <div className="bg-orange-50 rounded-2xl p-6 space-y-5 shadow-sm sticky top-30">
              <h2 className="text-3xl font-bold text-gray-900">${car.price}</h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Doors</span>
                  <span>4</span>
                </li>
                <li className="flex justify-between">
                  <span>Passengers</span>
                  <span>1</span>
                </li>
                <li className="flex justify-between">
                  <span>Transmission</span>
                  <span>{car.transmission}</span>
                </li>
                <li className="flex justify-between">
                  <span>Age</span>
                  <span>2</span>
                </li>
                <li className="flex justify-between">
                  <span>Luggage</span>
                  <span>2</span>
                </li>
                <li className="flex justify-between">
                  <span>Air Condition</span>
                  <span>Yes</span>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-sm font-semibold">
                  Book Now
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full">
                  <PhoneCall size={18} />
                </button>
              </div>
            </div>

            {/* Left side  */}
            <div className="lg:col-span-2">
              {/* Image Section */}
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src={car.image}
                  alt="Car"
                  className="w-full h-[380px] object-cover"
                />
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <CheckCircle className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold ">Unlimited KMs</p>
                    <p className="text-sm text-gray-500">No extra charge</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <CheckCircle className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold ">Secure & Insured</p>
                    <p className="text-sm text-gray-500">Drive worry-free</p>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="mt-16 max-w-3xl">
                <p className="text-orange-500 text-sm font-semibold mb-2">
                  General Information
                </p>
                <h3 className="text-3xl font-bold mb-4">
                  Know about our car service
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We provide premium rental cars with flexible pricing,
                  unlimited mileage, and 24/7 roadside assistance. Our vehicles
                  are regularly maintained to ensure comfort, safety, and
                  performance.
                </p>

                <ul className="space-y-3">
                  {[
                    "24/7 Roadside Assistance",
                    "Free Cancellation & Return",
                    "Rent Now, Pay When You Arrive",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="text-orange-500" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div className="mt-16">
                <p className="text-orange-500 text-sm font-semibold mb-2">
                  Amenities
                </p>
                <h3 className="text-3xl font-bold mb-6">
                  Premium amenities and features
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Music System",
                    "Toolkit",
                    "ABS System",
                    "Bluetooth",
                    "Full Boot Space",
                    "USB Charger",
                    "Aux Input",
                    "Spare Tyre",
                    "Power Steering",
                    "Power Windows",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="text-orange-500" size={16} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default page;
