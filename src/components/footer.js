import React from "react";
import FooterIcons from "./footer-icons";
import icons from "../data/icons";
const Footer = () => {
  return (
    <section>
      <div
        className="w-full py-6 text-white"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(/images/footer-bg.jpg) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto w-4/5">
          <div className="flex flex-col items-center justify-center pt-16 text-center">
            <h2 className="font-brand text-4xl ">Laura </h2>
            <p className="py-4">
              Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
              eligendi fuga maxime saepe commodi placeat.
            </p>
            <div className="flex flex-row justify-center items-center py-8">
              {icons.map(({ icon, id }) => (
                <FooterIcons icon={icon} key={id} />
              ))}
            </div>
            <div className="py-4">
              <p>© Copyright Laura. All Rights Reserved</p>
              <p className="py-4">
                Designed by
                <span className="text-yellow-500"> BootstrapMade</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
