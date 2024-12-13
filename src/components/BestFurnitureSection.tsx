import React from "react";
import BestFurnitureImage from "../assets/img/bestFurniture.jpg";

const WeCreateYourHomeSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">
            The Best Furniture Manufacturer of your choice
          </h2>
          <p className="text-lg mb-6">
            Furnitre power is a software as services for multiperpose business
            management system, expecially for them who are running two or more
            business exploree the future Furnitre power is a software as
            services \
          </p>
        </div>

        {/* Right Text */}
        <div className="flex-1">
          <img
            src={BestFurnitureImage}
            alt="We Create Your Home"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WeCreateYourHomeSection;
