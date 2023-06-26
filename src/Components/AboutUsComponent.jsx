import React from "react";

const AboutUsComponent = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-gray-200 px-4 md:px-20 py-6">
      <div className="md:w-1/2">
        <img src="aboutImage.png" alt="" className="w-full max-w-xl" />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <h3 className="text-2xl font-bold mb-4 text-rose-700">ABOUT US</h3>
        <p className="text-lg mb-4">
          Welcome to Vittibhumi, a real estate company based in Bhubaneswar,
          Odisha. Founded in 2014, our mission is to provide our clients with
          the best possible real estate services in the region.
        </p>
        <p className="text-lg mb-4">
          We pride ourselves on our commitment to honesty, integrity, and transparency in
          all our dealings. At Vittibhumi, we value our clients and strive to
          build long-term relationships based on trust and mutual respect.
        </p>
        <p className="text-lg">
          If you're looking for a reliable and trustworthy real estate partner in
          Bhubaneswar, look no further than Vittibhumi. Contact us today to
          learn more about our services and how we can help you achieve your
          real estate goals.
        </p>
      </div>
    </section>
  );
};

export default AboutUsComponent;
