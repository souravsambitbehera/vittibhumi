import React from "react";
import ContactComponent from "../Components/ContactComponent";

const Contact = () => {
  return (
    <div>
      <ContactComponent />
      <iframe
      title="location"
      className="p-2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.658081469159!2d85.81131147456668!3d20.2730103811939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c4e62755fb%3A0xfb45d68e5027d29c!2sVittibhumi%20Buildtech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1688223502006!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
