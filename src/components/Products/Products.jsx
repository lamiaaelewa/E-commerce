import React from "react";
import Sneaker1 from "../../assets/sneakers/sneaker1.jpg";
import Sneaker2 from "../../assets/sneakers/sneaker2.jpg";
import Sneaker3 from "../../assets/sneakers/sneaker3.jpg";
import Sneaker4 from "../../assets/sneakers/sneaker4.jpg";
import Sneaker5 from "../../assets/sneakers/sneaker5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Sneaker1,
    title: "Air Max Pro",
    rating: 5.0,
    color: "White",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Sneaker2,
    title: "Nike ZoomX",
    rating: 4.8,
    color: "Red",
    price: "$150",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Sneaker3,
    title: "Adidas Ultraboost",
    rating: 4.7,
    color: "Black",
    price: "$140",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Sneaker4,
    title: "Puma RS-X",
    rating: 4.6,
    color: "Blue",
    price: "$130",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Sneaker5,
    title: "New Balance 574",
    rating: 4.5,
    color: "Gray",
    price: "$110",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-lg text-primary dark:text-primary-light">
            Top Sneakers for You
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold dark:text-white">
            Best Selling Sneakers
          </h1>
          <p data-aos="fade-up" className="text-base text-gray-400 dark:text-gray-300">
            Discover the latest sneakers with the best deals and top ratings.
          </p>
        </div>
        {/* Body section */}
        <div className="flex flex-wrap justify-center gap-5">
          {/* card section */}
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-[220px]"
            >
              <img
                src={data.img}
                alt="Sneaker"
                className="h-[250px] w-full object-cover rounded-md"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg dark:text-white">{data.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Color: {data.color}</p>
                <p className="text-md font-bold dark:text-gray-200">{data.price}</p>
                <div className="flex justify-center items-center gap-1 mt-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold dark:text-white">{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300 dark:bg-primary-light dark:hover:bg-primary">
            View All Sneakers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

