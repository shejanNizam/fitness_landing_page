import Image from "next/image";
import imageTwo from "../assets/personal_plan/after_perfomance.png";
import imageOne from "../assets/personal_plan/before_perfomance.png";
import CHeading from "./CHeading";
import CSubHeading from "./CSubHeading";

const performanceData = [
  {
    _id: "before",
    title: "Performance before plan",
    design: "bg-red-500",
    image: imageOne,
    alt: "Man sitting sadly on a bed before the plan",
  },
  {
    _id: "after",
    title: "Performance after plan",
    design: "bg-green-500",
    image: imageTwo,
    alt: "Man celebrating with hands up on a bed after the plan",
  },
];

const improvementAreas = [
  {
    _id: "erectile",
    icon: "♂",
    area: "Erectile function",
  },
  {
    _id: "ejaculation",
    icon: "◷",
    area: "Ejaculation control",
  },
  {
    _id: "prostate",
    icon: "♆",
    area: "Prostate health",
  },
  {
    _id: "confidence",
    icon: "♂",
    area: "Confidence",
  },
  {
    _id: "relationships",
    icon: "◎",
    area: "Relationships happiness",
  },
];

export default function PersonalPlanWithImproveArea() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 bg-white font-sans">
      <CHeading text="Your personal plan is ready" />

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-3xl mb-12">
        {performanceData?.map((item) => (
          <div
            key={item._id}
            className="flex-1 rounded-lg shadow-xl overflow-hidden bg-gray-50"
          >
            <div className="h-64 sm:h-72 w-full">
              <Image
                src={item.image}
                alt={item.alt}
                className="object-fit w-full h-full"
              />
            </div>

            <div className="p-4 flex flex-col items-center justify-center text-center">
              <div className="w-[50%] mx-auto">
                <CSubHeading text={item.title} />
              </div>
              <div className="flex gap-1.5 mt-2">
                {[...Array(3)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-8 h-2 rounded-full ${item.design}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl border-t border-gray-200 my-4"></div>

      {/* area of improvement */}
      <div className="w-full max-w-4xl mt-6 p-4">
        <CHeading text="Key Areas of Improvement" />

        <div className="space-y-6 flex flex-col items-center">
          {improvementAreas.map((item) => (
            <div
              key={item._id}
              className="flex items-center w-full max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-md transition duration-200 hover:shadow-lg hover:border-[#A50015] "
            >
              <span className="text-2xl mr-4 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                {item.icon}
              </span>

              <CSubHeading text={item.area} className="m-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
