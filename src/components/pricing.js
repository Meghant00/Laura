import React from "react";
import Heading from "./heading";
import PricingCard from "./pricing-card";
import pricingData from "../data/pricing-data";
const Pricing = () => {
  return (
    <section className="bg-white py-4 text-gray-800" id="#pricing">
      <div className="container w-4/5 mx-auto">
        <Heading name="pricing" />
        <p className="text-center">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
        <div className="py-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {pricingData.map((item) => (
            <PricingCard
              key={item.title}
              title={item.title}
              money={item.money}
              items={item.texts}
              isRecommended={item.isRecommended}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
