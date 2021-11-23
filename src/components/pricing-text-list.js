import React from "react";
import PricingText from "./pricing-text";
const PricingTextList = ({ list }) => {
  return (
    <>
      {list.map((items) => (
        <PricingText text={items.text} status={items.status} key={items.text} />
      ))}
    </>
  );
};

export default PricingTextList;
