import React from "react";

import ContactIcon from "./contact-icon";

const ContactCard = ({ links, title, icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-xl px-4 py-4">
      <div className="bg-yellow-300 rounded-full bg-opacity-40 ">
        <div className="py-4 px-4">{icon}</div>
      </div>
      <h4 className="text-gray-600 font-semibold py-4 text-2xl">{title}</h4>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center">
          {links ? (
            links.map(({ link, id }) => <ContactIcon icon={link} key={id} />)
          ) : (
            <p className="text-lg">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
