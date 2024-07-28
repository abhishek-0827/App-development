import React from "react";
import Img2 from "../assests/IntoBox.webp";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Watches",
    description:
      "A watch is a timeless gift that captures moments and memories with elegance.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Photo Frames",
    description:
      "A photo frame is a timeless gift that turns cherished moments into lasting memories.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Bracelets",
    description:
      "A bracelet is a stylish gift that wraps your wrist with cherished memories and elegance.",
    aosDelay: "500",
  },
 
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="py-20">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Popular Gifts Selected For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-3xl py-20 bg-slate-100 hover:bg-primary hover:text-black relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;