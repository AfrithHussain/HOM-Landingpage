import React from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$10",
    features: ["1 Website", "10 GB Storage", "Basic Support"],
  },
  {
    id: 2,
    name: "Pro",
    price: "$30",
    features: ["5 Websites", "50 GB Storage", "Priority Support"],
  },
  {
    id: 3,
    name: "Premium",
    price: "$50",
    features: ["Unlimited Websites", "100 GB Storage", "24/7 Support"],
  },
];

const PriceTable = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 ">
      <h1 className="text-4xl font-semibold mb-8 text-gray-800">Our Pricing</h1>

      <div className="flex flex-wrap justify-center items-center gap-20">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="w-80 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center cursor-pointer hover:bg-neutral-100 justify-between 
                       hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Title & Price */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-blue-500 mb-6">
                {plan.price}
              </p>

              {/* Features List */}
              <ul className="text-gray-600 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-3 flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium 
                         hover:bg-blue-600 transition duration-300"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTable;
