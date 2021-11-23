import React from "react";

import PricingTextList from "./pricing-text-list";
import PricingButton from "./pricing-button";
const PricingCard = ({ money, title, items, isRecommended }) => {
  let titleClassName = "py-4 px-4 text-center text-lg w-full bg-gray-100";
  isRecommended === true
    ? (titleClassName = "bg-yellow-400 text-white " + titleClassName)
    : (titleClassName = "text-gray-600 " + titleClassName);
  return (
    <div className="rounded-xl flex flex-col items-center justify-center shadow-lg">
      <div className={titleClassName}>{title}</div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="py-4">
          <sup className="text-yellow-400 text-2xl font-semibold">$</sup>
          <span className="text-yellow-400 text-4xl font-semibold">
            {money}
          </span>
          <sub className="text-lg text-gray-400 font-light"> / month</sub>
        </div>
        <PricingTextList list={items} />
      </div>
      <div className="py-4 bg-gray-100 w-full flex flex-col items-center justify-center">
        <PricingButton />
      </div>
    </div>
  );
};
PricingCard.defaultProps = {
  isRecommended: false,
};
export default PricingCard;
