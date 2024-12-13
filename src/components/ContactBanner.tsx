import React, { useState } from "react";
import ContactBannerImage from "../assets/img/contactBanner.jpg";
import apiClient from "../services/api";

const ContactBanner: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    apiClient
      .post("/subscribe", { email })
      .then((response) => {
        console.log("Subscription successful:", response.data.message);
        setMessage(response.data.message);
        console.log("message", message);
        setEmail("");
      })
      .catch((error) => {
        setMessage("Something went wrong. Please try again later.");
        console.error("Error subscribing:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-96"
      style={{
        backgroundImage: `url(${ContactBannerImage})`,
      }}
    >
      <div className="relative container mx-auto px-6 h-full flex items-center justify-center md:justify-end">
        <div className=" p-2 md:p-4 lg:p-6 w-full md:w-7/12 lg:w-5/12 me-0 lg:me-16 text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 w-full md:w-2/3">
            Get Your Discount on Your Order
          </h2>
          <p className="text-white mb-6">Join our mailing list</p>

          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-2/3 p-2 mx-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="bg-primary-default text-white mx-1 px-4 py-2 rounded-lg hover:bg-gray-600 w-1/3"
              disabled={loading}
            >
              {loading ? "Loading..." : "Shop Now"}
            </button>
          </div>
          {message && <p className="text-sm mt-4 text-gray-100">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
