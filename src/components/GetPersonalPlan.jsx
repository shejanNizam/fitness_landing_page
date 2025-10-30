"use client";

import { useState } from "react";
import CHeading from "./CHeading";

const plans = [
  {
    id: "1week",
    duration: "1-WEEK PLAN",
    originalPrice: "10.50 USD",
    discountedPrice: "5.50 USD",
    dailyRateOriginal: "1.50 USD",
    dailyRateDiscounted: "0.79 USD",
    isPopular: false,
    previousPercentage: "34%",
    discountPercentage: "48%",
  },
  {
    id: "1month",
    duration: "1-MONTH PLAN",
    originalPrice: "31.00 USD",
    discountedPrice: "11.99 USD",
    dailyRateOriginal: "1.00 USD",
    dailyRateDiscounted: "0.39 USD",
    isPopular: true,
    previousPercentage: "51%",
    discountPercentage: "61%",
  },
  {
    id: "3month",
    duration: "3-MONTH PLAN",
    originalPrice: "53.04 USD",
    discountedPrice: "21.49 USD",
    dailyRateOriginal: "0.59 USD",
    dailyRateDiscounted: "0.24 USD",
    isPopular: false,
    previousPercentage: "51%",
    discountPercentage: "60%",
  },
];

function PlanCard({ plan, isSelected, onSelect }) {
  const borderStyle = isSelected
    ? "border-red-600 shadow-md ring ring-red-600"
    : "border-gray-200";

  const badgeBgColor = isSelected ? "bg-red-600" : "bg-gray-200";
  const badgeTextColor = isSelected ? "text-white" : "text-gray-800";
  const originalPriceTextColor = isSelected ? "text-white" : "text-gray-400";

  return (
    <div
      className={`relative px-4 py-3 mb-3 border rounded-xl cursor-pointer transition-all duration-200 bg-white ${borderStyle}`}
      onClick={() => onSelect(plan.id)}
    >
      {/* MOST POPULAR label */}
      {plan.isPopular && (
        <div className="absolute top-0 left-4 transform -translate-y-1/2 px-2 py-0.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-red-500 border border-red-600">
          MOST POPULAR
        </div>
      )}

      <div className="flex items-center justify-between relative pr-24">
        <div className="flex items-center space-x-3">
          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 
              ${isSelected ? "border-red-600 bg-white" : "border-gray-400"}`}
          >
            {isSelected && (
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
            )}
          </div>

          <div className="flex flex-col">
            <p
              className={`text-base font-medium ${
                isSelected ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {plan.duration}
            </p>
            <p className="text-sm text-gray-500">
              <span className="line-through mr-1 text-gray-400">
                {plan.originalPrice}
              </span>
              <span
                className={`${
                  isSelected ? "text-black font-semibold" : "text-gray-400"
                }`}
              >
                {plan.discountedPrice}
              </span>
            </p>
          </div>
        </div>

        {/* Right: Custom Shaped Discount Badge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <div
            className={`relative flex flex-col items-center justify-center h-16 w-[100px] ${badgeBgColor} rounded-r-lg shadow-md`}
          >
            <div
              className={`absolute left-0 top-0 h-full w-4 z-0`}
              style={{
                clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
                backgroundColor: isSelected
                  ? "rgb(220 38 38)"
                  : "rgb(229 231 235)",
                transform: "translateX(-100%)",
              }}
            ></div>

            {/* Content of the badge */}
            <div className="relative z-10 text-center">
              <p className={`text-xs line-through ${originalPriceTextColor}`}>
                {plan.dailyRateOriginal}
              </p>
              <p className={`text-lg font-bold leading-none ${badgeTextColor}`}>
                {plan.dailyRateDiscounted}
              </p>
              <p className={`text-xs ${badgeTextColor}`}>per day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GetPersonalPlan() {
  const [selectedPlan, setSelectedPlan] = useState("1month");

  const currentPlan = plans.find((p) => p.id === selectedPlan) || plans[1];

  return (
    <div className="flex flex-col items-center p-4 sm:p-8">
      {/* Main Heading */}
      <CHeading
        text="See the result in 4 weeks"
        className="text-2xl font-extrabold text-black"
      />

      {/* Discount Ribbon/Gift Box Section */}
      <div className="w-full max-w-md bg-red-50 border border-red-300 rounded-lg p-3 my-4 flex justify-center items-center">
        <span className="text-2xl mr-3" role="img" aria-label="gift box">
          🎁
        </span>
        <p className="text-base font-semibold text-gray-600">
          Get a{" "}
          <span className="line-through font-extrabold">
            {currentPlan.previousPercentage}
          </span>{" "}
          <span className="text-red-900 font-extrabold">
            {currentPlan.discountPercentage}
          </span>{" "}
          discount on your Kegel plan
        </p>
      </div>

      <div className="w-full max-w-md mx-auto">
        {/* Plan Cards */}
        {plans?.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan === plan.id}
            onSelect={setSelectedPlan}
          />
        ))}

        {/* 30-day money-back guarantee */}
        <div className="flex items-center justify-center my-4">
          <span className="text-red-600 mr-2">✔</span>
          <p className="text-sm font-medium text-gray-700">
            **30-day money-back guarantee**
          </p>
        </div>

        <button className="w-full py-4 bg-red-600 text-white font-bold text-xl rounded-xl shadow-lg hover:bg-red-700 transition-colors duration-200 cursor-pointer">
          Get My Plan
        </button>

        <div className="mt-4 text-xs text-center text-gray-500">
          {selectedPlan === "1week" && (
            <p>
              We've automatically applied the discount to your 1-week Kegel
              Plan. Please note that your subscription will be automatically
              renewed at the full price of 31 USD per 1 month at the end of your
              1-week Kegel Plan and will then be continuously renewed every 1
              month until you cancel. If you want to manage your subscription,
              you may do so visiting Billing Center or in the Dr. Kegel app.
            </p>
          )}
          {selectedPlan === "1month" && (
            <p>
              We've automatically applied the discount to your 1-month Kegel
              Plan. After 1 month, your subscription will be automatically
              renewed at the full price of 31 USD per 1 month and will then be
              continuously renewed every 1 month until you cancel. If you want
              to manage your subscription, you may do so visiting Billing Center
              or in the Dr. Kegel app.
            </p>
          )}
          {selectedPlan === "3month" && (
            <p>
              We've automatically applied the discount to your 3-months Kegel
              Plan. After 3 months, your subscription will be automatically
              renewed at the full price of 53.04 USD per 3 months and will then
              be continuously renewed every 3 months until you cancel. If you
              want to manage your subscription, you may do so visiting Billing
              Center or in the Dr. Kegel app.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
