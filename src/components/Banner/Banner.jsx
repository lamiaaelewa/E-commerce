import React from "react";
import BannerImg from "../../assets/website/Banner4.jpg";
import { FaShippingFast, FaLock, FaTags, FaCreditCard } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Sneakers Collection"
              className="max-w-[450px] h-[400px] w-full mx-auto drop-shadow-xl object-cover rounded-lg"

            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
          <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-bold uppercase"
            >
              Elevate Your Style With{" "}
              <span className="text-primary">Premium Sneakers</span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg text-gray-500 tracking-wide leading-6"
            >
              Discover the latest trends in sneaker fashion. High-quality,
              stylish, and comfortable footwear for every occasion.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
              <FaShippingFast className="text-4xl text-primary" />
              <p>Fast Shipping</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
              <FaLock className="text-4xl text-primary" />
              <p>Secure Payments</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
              <FaTags className="text-4xl text-primary" />
              <p>Exclusive Offers</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
              <FaCreditCard className="text-4xl text-primary" />
              <p>Easy Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;