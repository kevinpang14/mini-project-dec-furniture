import React, { useEffect, useState } from "react";
import apiClient from "../services/api";
import TestimonialImage from "../assets/img/testimonial.jpg";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  title: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTestimonials = (page: number, limit: number) => {
    apiClient
      .get(`/testimonials?page=${page}&limit=${limit}`)
      .then((response) => {
        setTestimonials(response.data.testimonials);
        setTotalPages(response.data.totalPages);
        console.log("Testimonials Data:", response.data.testimonials);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  };

  useEffect(() => {
    fetchTestimonials(currentPage, 1);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border rounded-lg p-4 mb-6 shadow-md bg-white"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.message}</p>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-start items-center gap-4 mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white font-medium bg-secondary border border-primary-default rounded-full ${
                currentPage === 1
                  ? "text-white cursor-not-allowed"
                  : "hover:underline"
              }`}
            >
              &#129032;
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white font-medium  bg-secondary border border-primary-default rounded-full ${
                currentPage === totalPages
                  ? "text-white cursor-not-allowed"
                  : "hover:underline"
              }`}
            >
              &#129034;
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <img
            src={TestimonialImage}
            alt="Testimonial Background"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
