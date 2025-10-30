"use client";

import { useState } from "react";
import CHeading from "./CHeading";
import CParagraph from "./CParagraph";

const plans = [
  {
    id: "1month",
    duration: "1 Month",
    price: "$4.99 / week",
    isPopular: false,
  },
  {
    id: "3month",
    duration: "3 Month",
    price: "$4.99 / week",
    isPopular: true,
  },
  {
    id: "1year",
    duration: "1 Year",
    price: "$4.99 / week",
    isPopular: false,
  },
];

function PlanCard({ plan, isSelected, onSelect }) {
  const borderStyle = isSelected
    ? "border-red-700 shadow-lg"
    : "border-gray-200 hover:border-red-300";

  return (
    <div
      className={`relative p-4 sm:p-6 mb-4 border-2 rounded-xl cursor-pointer transition-all duration-200 bg-white ${borderStyle}`}
      onClick={() => onSelect(plan.id)}
    >
      {plan.isPopular && (
        <div className="absolute top-0 left-4 transform -translate-y-1/2 px-3 py-0.5 rounded-full bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md">
          Popular now !!!
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-gray-800">{plan.duration}</p>
          <p className="text-sm text-gray-500">{plan.price}</p>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 
            ${isSelected ? "border-red-700 bg-white" : "border-gray-400"}`}
        >
          {isSelected && (
            <div className="w-4 h-4 rounded-full bg-red-700"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GetPersonalPlan() {
  const [selectedPlan, setSelectedPlan] = useState("3month");

  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 sm:p-8">
      <CHeading text="Get your personal plan..." />
      <div className="md:w-[60%] xl:w-[40%] mx-auto text-center my-2">
        <CParagraph
          text="A subscription plan offers access to exclusive features or services for
        a set period. By purchasing a plan, users can enjoy continuous benefits,
        updates, and premium content at a fixed price. It's a convenient way to
        ensure ongoing access without the need for frequent renewals or
        payments."
        />
      </div>

      <div className="w-full max-w-md mx-auto">
        {plans?.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan === plan.id}
            onSelect={setSelectedPlan}
          />
        ))}

        <button className="w-full mt-4 py-3 bg-[#A50015] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-red-700 transition-colors duration-200 cursor-pointer">
          Purchase now
        </button>
      </div>
    </div>
  );
}
