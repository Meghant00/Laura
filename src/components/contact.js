import React from "react";
import ContactCard from "./contact-card";
import Heading from "./heading";
import socialProfile from "../data/social-profile";
import contactData from "../data/contact-data";
import ContactForm from "./contact-form";
const Contact = () => {
  return (
    <section className="bg-white py-6 text-gray-800" id="contact">
      <div className="container mx-auto w-4/5">
        <Heading name="Contact Me" />
        <p className="text-center py-2">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
          <ContactCard
            title={socialProfile.title}
            icon={socialProfile.icon}
            links={socialProfile.links}
            className="col-start-1"
          />
          <div className="row-span-2 row-start-3 lg:col-start-2 lg:row-start-1">
            <ContactForm />
          </div>
          <div className="grid grid-cols-1 row-start-2 md:grid-cols-2 gap-4 ">
            {contactData.map((items) => (
              <ContactCard
                title={items.title}
                icon={items.icon}
                text={items.text}
                key={items.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
