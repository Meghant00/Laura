import React from "react";
import PortfolioImage from "./portfolio-image";

const PortfolioImageList = ({ imageList }) => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col gap-4">
        {imageList.slice(0, 3).map((image) => (
          <PortfolioImage
            name={image.name}
            type={image.type}
            location={image.location}
            key={image.name}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {imageList.slice(3, 6).map((image) => (
          <PortfolioImage
            name={image.name}
            type={image.type}
            location={image.location}
            key={image.name}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {imageList.slice(6, 9).map((image) => (
          <PortfolioImage
            name={image.name}
            type={image.type}
            location={image.location}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioImageList;
