import React from "react";
import Heading from "./heading";
import ServiceCard from "./service-card";
import services from "../data/service-data";
const Services = () => {
  return (
    <section className="bg-white py-8 text-gray-800" id="services">
      <div className="container mx-auto w-4/5">
        <Heading name="Services" />
        <p className="py-2 text-center">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
          {services.map((item) => (
            <ServiceCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
