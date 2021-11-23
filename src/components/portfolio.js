import React from "react";
import Heading from "./heading";
import { useState } from "react";
import portfolioData from "../data/portfolio-data";
import PortfolioImageList from "./portfolio-image-list";
import PortfolioButton from "./portfolio-button";
const Protfolio = () => {
  const [images, setImages] = useState(portfolioData);
  const [dummy, setDummy] = useState(images);
  const [active, setActive] = useState("All");
  const buttonClickHandler = (type) => {
    setActive(type);
    if (type !== "All") {
      setImages(dummy.filter((image) => image.type === type));
      console.log(images);
    } else {
      setImages(portfolioData);
      setDummy(portfolioData);
    }
  };

  return (
    <section className="bg-white py-6 text-gray-800" id="portfolio">
      <div className="container w-4/5 mx-auto">
        <Heading name="My Protfolio" />
        <p className="text-center py-2">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
        <div className="py-4 flex flex-row flex-wrap items-center justify-center gap-4">
          <PortfolioButton
            text="All"
            onClick={buttonClickHandler}
            active={active}
          />
          <PortfolioButton
            text="Web"
            onClick={buttonClickHandler}
            active={active}
          />
          <PortfolioButton
            text="Card"
            onClick={buttonClickHandler}
            active={active}
          />
          <PortfolioButton
            text="App"
            onClick={buttonClickHandler}
            active={active}
          />
        </div>

        <PortfolioImageList imageList={images} />
      </div>
    </section>
  );
};

export default Protfolio;
