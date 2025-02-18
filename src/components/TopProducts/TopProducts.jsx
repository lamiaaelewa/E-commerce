import React from "react";
import Img1 from "../../assets/shoes/shoe1.png";
import Img2 from "../../assets/shoes/shoe2.png";
import Img3 from "../../assets/shoes/shoe3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Classic Leather Shoes",
    description:
      "Elegant and timeless leather shoes, designed for comfort and style. Perfect for formal occasions or everyday wear.",
  },
  {
    id: 2,
    img: Img2,
    title: "Casual Slip-on Sandals",
    description:
      "Versatile slip-on sandals, offering comfort and ease with a stylish design. Ideal for a casual, relaxed look.",
  },
  {
    id: 3,
    img: Img3,
    title: "Men's Formal Sandals",
    description:
      "Sleek formal sandals, crafted for a refined and polished look. Perfect for a day at the office or evening events.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container flex flex-col items-center justify-center">
        {/* Header section */}
        <div className="text-center mb-24">
          <p data-aos="fade-up" className="text-lg text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Discover our finest selection of classic shoes and sandals designed for elegance, comfort, and style.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[350px]"
            >
              {/* image section */}
              <div className="h-[150px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[180px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-lg"
                />
              </div>
              {/* details section */}
              <div className="p-6 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-2xl font-semibold mt-4">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-base line-clamp-3 mt-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-2 px-6 rounded-full mt-6 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
