import React from "react";

const SliderItem = ({ image, name, post, testimonial }) => {
  return (
    <div className="container w-4/5 mx-auto text-white py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center py-4">
          <div className="rounded-full overflow-hidden bg-gray-400 bg-opacity-40 w-1/2">
            <img
              src={image}
              alt="testimonials"
              className="px-4 py-4 rounded-full"
            />
          </div>
          <h4 className="text-2xl font-semibold">{name}</h4>
          <p className="text-lg text-gray-300">{post}</p>
        </div>
        <div className="py-4">
          <p className="text-white relative text-center text-lg">
            <i className="fas fa-quote-left text-xl opacity-80 text-gray-400  px-2"></i>
            {testimonial}
            <i className="fas fa-quote-right text-xl opacity-80 text-gray-400 px-2"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
