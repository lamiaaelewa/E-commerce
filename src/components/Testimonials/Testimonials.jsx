import React from "react";
import Slider from "react-slick";

// Testimonial data with real content
const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "This is the best product I have ever used. The comfort and design are unmatched!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Highly recommend this to anyone looking for top-notch quality and style.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Perfect for every occasion. Comfortable, stylish, and durable.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "The best shoes I’ve worn in a long time. They fit perfectly and feel amazing!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  // Faster autoplay speed
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-lg text-primary font-semibold" data-aos="fade-up">
            What Our Customers Are Saying
          </p>
          <h1 className="text-4xl font-bold text-dark-700" data-aos="fade-up">
            Testimonials
          </h1>
          <p className="text-base text-gray-400" data-aos="fade-up">
            See how our products are changing the way people experience comfort and style. 
            Our customers are thrilled with the quality and design, and you will be too!
          </p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-6 shadow-2xl py-8 px-8 mx-4 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-50 relative dark:bg-gray-800">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-24 h-24 border-4 border-primary/80"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-base text-gray-500 text-center italic">{data.text}</p>
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-light">
                      {data.name}
                    </h1>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
