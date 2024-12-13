import React, { useEffect, useState } from "react";
import apiClient from "../services/api";

interface InfoBannerData {
  experience: string;
  country: string;
  sold: string;
  variant: string;
}

const InfoBanner: React.FC = () => {
  const [infoBannerData, setInfoBannerData] = useState<InfoBannerData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get("/data")
      .then((response) => {
        setInfoBannerData(response.data);
        console.log("Info Banner Data:", response.data);
      })
      .catch((error) => {
        setError("Failed to fetch info banner data");
        console.error("Error fetching info banner data:", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Check if infoBannerData is null
  if (!infoBannerData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-secondary rounded-2xl shadow-md py-8 px-6 w-10/12 md:max-w-6xl mx-auto -mt-28 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          <div className="p-4 border-r border-white">
            <h2 className="text-4xl text-white font-bold">
              {infoBannerData.experience}+
            </h2>
            <p className="text-white">Years Experience</p>
          </div>
          <div className="p-4 border-0 md:border-r border-white">
            <h2 className="text-4xl text-white font-bold">
              {infoBannerData.country}
            </h2>
            <p className="text-white">Countries</p>
          </div>
          <div className="p-4 border-r border-white">
            <h2 className="text-4xl text-white font-bold">
              {infoBannerData.sold}
            </h2>
            <p className="text-white">Products Sold</p>
          </div>
          <div className="p-4">
            <h2 className="text-4xl text-white font-bold">
              {infoBannerData.variant}
            </h2>
            <p className="text-white">Product Variants</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBanner;
