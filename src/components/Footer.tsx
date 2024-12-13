import React from "react";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import GithubIcon from "../assets/icons/github.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-primary-default text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center border-b border-white pb-4">
          <h1 className="text-3xl font-bold">FurniShop</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <img src={GithubIcon} alt="Github" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
          <div>
            <h2 className="text-lg mb-4">Our Products</h2>
            <ul className="space-y-2">
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>
          <div>
            <h2 className=" text-lg mb-4">Top Features</h2>
            <ul className="space-y-2">
              <li>Ticketing System</li>
              <li>Knowledge Base</li>
              <li>Community Forums</li>
              <li>Help Desk Software</li>
            </ul>
          </div>
          <div>
            <h2 className=" text-lg mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>Product Support</li>
              <li>Request Demo</li>
              <li>Library</li>
              <li>Peoplepower Blog</li>
            </ul>
          </div>
          <div>
            <h2 className=" text-lg mb-4">Company</h2>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Press</li>
              <li>Investors</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h2 className=" text-lg mb-4">Favourite Things</h2>
            <ul className="space-y-2">
              <li>For Enterprise</li>
              <li>For Startups</li>
              <li>For Benchmark</li>
              <li>For Small Business</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p>© NameBrand 2022 - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
