import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 text-white"
      style={{
        backgroundColor: "#6B8E23", 
        height: "100%",
        width: "100%",
      }}
    >
      <div className="container py-10">
        <div className="space-y-6 max-w-xl mx-auto bg-gradient-to-r from-[#6B8E23] to-[#4B5B2F] rounded-lg shadow-xl p-6">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-full bg-white text-black placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSubscribe}
            className="w-full bg-primary text-white py-3 rounded-full mt-4 font-semibold hover:bg-[#4B5B2F] focus:ring-2 focus:ring-primary transition duration-300"
          >
            {isSubscribed ? "Subscribed!" : "Subscribe"}
          </button>
          {isSubscribed && (
            <div className="mt-4 text-center text-white">
              <p className="font-semibold">You’re all set! You’ll get notified about new products soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
