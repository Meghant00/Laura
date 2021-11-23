import React from "react";

const PricingText = ({ text, status }) => {
  let pricingTextClassName = "py-2 text-gray-400";
  if (status === true) {
    pricingTextClassName = "py-2 ";
  }
  return (
    <p className={pricingTextClassName}>
      {status === true ? <span>{text}</span> : <strike>{text}</strike>}
    </p>
  );
};
PricingText.defaultProps = {
  status: true,
};
export default PricingText;
