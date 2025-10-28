import Image from "next/image";
import image from "../assets/rating_review/ratings.png";
// --- Data Structure ---

const testimonialsData = [
  {
    _id: "t1",
    name: "David",
    rating: 5,
    review:
      "The app has a clean and intuitive design, making it easy to navigate through different exercises and routines. I appreciate how simple it is to track progress and set goals.",
  },
  {
    _id: "t2",
    name: "Thomas",
    rating: 5,
    review: "Literally changed my life.",
  },
  {
    _id: "t3",
    name: "Vanni",
    rating: 5,
    review:
      "I am a few weeks in and I can already tell there better blood flow and less tempration to ejaculate early.",
  },
];

// --- Helper Components ---

// Component for a single star icon
const StarIcon = ({ fill = true }) => (
  <svg
    className={`w-4 h-4 ${fill ? "text-yellow-500" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.36 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.446a1 1 0 00-1.176 0l-3.36 2.446c-.784.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.24 9.384c-.783-.57-.381-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.957z" />
  </svg>
);

// Component to render the star rating
const RatingStars = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} fill={i < rating} />
    ))}
  </div>
);

// --- Main Component ---

export default function RatingWithSuccess() {
  return (
    <div className="bg-gray-50 py-12 sm:py-20 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        {/* Top Section: Rating and Trust */}
        <Image src={image} alt="rating_image" className="mb-8" />

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Hear success stories from <br />
          our clients !!!
        </h2>

        {/* Testimonials List */}
        <div className="space-y-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              {/* Rating */}
              <div className="mb-2">
                <RatingStars rating={testimonial.rating} />
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                {testimonial.name}
              </h4>

              {/* Review Text */}
              <p className="text-sm text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
