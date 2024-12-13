import React, { useEffect, useState } from "react";
import apiClient from "../services/api";

interface HeaderData {
  title: string;
  description: string;
  banner: string;
}
const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch header data from the API
    apiClient
      .get("/header")
      .then((response) => {
        setHeaderData(response.data);
        console.log("Header Data:", response.data);
      })
      .catch((error) => {
        setError("Failed to fetch header data");
        console.error("Error fetching header data:", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  // Check if headerData is null
  if (!headerData) {
    return <div>Loading...</div>;
  }

  return (
    <header
      className="text-white text-center py-12 h-[120vh] relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, rgba(255, 255, 255, 1) 100%), url(${headerData.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 90%",
      }}
    >
      <div className="w-full md:w-7/12 text-center md:-mt-28 px-4">
        <h1 className="text-6xl font-bold">{headerData.title}</h1>
        <p className="mt-8 md:px-20">{headerData.description}</p>
        <button className="mt-8 px-14 py-4 bg-gray-400 text-white text-xl rounded-xl bg-opacity-60 backdrop-blur-3xl hover:bg-opacity-80 transition duration-300 ease-in-out  ">
          Shop Now
        </button>
      </div>
      {/* <div className="absolute z-5 -bottom-20 left-0 w-full h-1/6 bg-gradient-to-b from-[#000000cc] to-white"></div> */}
    </header>
  );
};

export default Header;
