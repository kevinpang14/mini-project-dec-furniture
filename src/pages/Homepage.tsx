import React from "react";
import Header from "../components/Header";
import InfoBanner from "../components/InfoBanner";
import WeCreateYourHomeSection from "../components/WeCreateYourHomeSection";
import NewProductSection from "../components/NewProductSection";
import BestFurnitureSection from "../components/BestFurnitureSection";
import AllProductSection from "../components/AllProductSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";
import { Helmet } from "react-helmet";

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FurniShop - Elegant Furniture for Your Home</title>
        <meta
          name="description"
          content="Explore our wide range of elegant furniture for your home. High-quality designs at affordable prices."
        />
        <meta
          name="keywords"
          content="furniture, home decor, elegant furniture, modern furniture"
        />
      </Helmet>
      <div>
        <Header />
        <InfoBanner />
        <WeCreateYourHomeSection />
        <NewProductSection />
        <BestFurnitureSection />
        <AllProductSection />
        <TestimonialsSection />
        <ContactBanner />
      </div>
    </>
  );
};

export default Homepage;
