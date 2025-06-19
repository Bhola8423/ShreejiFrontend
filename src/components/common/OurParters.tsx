import React from 'react';
import NetrayalImage from "../../assets/netrayala.jpeg"
import Estore from "../../assets/estore.jpeg"

const OurPartners = () => {
    const partners = [
  {
    name: 'Shree Ji Netrayala',
    image: NetrayalImage,
  },
  {
    name: 'Shree Ji E-store',
    image: Estore,
  },
];

  return (
    <section className="w-full bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center gradient-text mb-10">Our Supportive Organization    </h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-xs"
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="h-48 object-contain mb-4 rounded-lg border-4 border-red-200"
            />
            <h3 className="text-xl bg-blue-100 px-4 py-2 rounded font-bold text-blue-800">{partner.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
