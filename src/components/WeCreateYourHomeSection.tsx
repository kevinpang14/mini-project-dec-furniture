import React from "react";
import WeCreateImage from "../assets/img/weCreate.jpg";
import ChecklistIcon from "../assets/icons/checklist.svg";

const WeCreateYourHomeSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={WeCreateImage}
            alt="We Create Your Home"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">
            We Create your home more aestetic
          </h2>
          <p className="text-lg mb-6">
            Furnitre power is a software as services for multiperpose business
            management system,
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <img
                src={ChecklistIcon}
                alt="Checklist Icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h3 className="font-bold">Valuation Services</h3>
                <p className="text-gray-600">
                  Sometimes features require a short description. This can be a
                  detailed description.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <img
                src={ChecklistIcon}
                alt="Checklist Icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h3 className="font-bold">Development of Furniture Models</h3>
                <p>
                  Sometimes features require a short description. This can be a
                  detailed description.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WeCreateYourHomeSection;
