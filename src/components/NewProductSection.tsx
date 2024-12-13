import React, { useEffect, useState } from "react";
import apiClient from "../services/api";

interface Category {
  title: string;
  image: string;
}

const NewProductSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get("/category")
      .then((response) => {
        setCategories(response.data.category);
        console.log("Categories Data:", response.data);
        console.log("Info Categories Data:", response.data.category);
      })
      .catch((error) => {
        setError("Failed to fetch info categories data");
        console.error("Error fetching info categories data:", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text */}
          <div className=" text-primary-default w-full md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">New Products</h2>
            <p className="text-lg mb-6">
              Discover our latest furniture designs that add elegance and
              comfort to your living space.
            </p>
            <a
              href="#"
              className="text-primary-default font-medium border-b border-black"
            >
              Check All →
            </a>
          </div>

          {/* Right Images */}
          <div className=" overflow-x-auto flex gap-4 w-full md:w-2/3">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-56 md:w-64"
                >
                  <div className="relative">
                    {/* Container for gradient */}
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-96 object-cover rounded-lg shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    {/* Gradient overlay */}
                  </div>
                  <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-medium px-2 py-1 rounded transition-transform z-10">
                    {category.title}
                  </p>
                </div>
              ))
            ) : (
              <p>Loading categories...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProductSection;
