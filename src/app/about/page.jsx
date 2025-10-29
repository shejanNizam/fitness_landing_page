// import CParagraph from "@/components/CParagraph";
// import CSubHeading from "@/components/CSubHeading";

// export default function About() {
//   const text =
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, magni quidem? Cupiditate nesciunt maxime mollitia blanditiis explicabo ad ipsam, eligendi asperiores ullam eos, sed, temporibus numquam minus voluptates! Aperiam, explicabo. Repellat voluptatibus vero, modi provident eligendi et voluptas exercitationem nisi eaque sunt sint cum ipsa aperiam expedita quibusdam placeat eveniet eius nulla rerum eum! Vero, quaerat deserunt amet dolores maiores ab quia eum accusantium, architecto accusamus dolorum numquam. Consequatur maiores distinctio sunt nostrum quod reiciendis quidem consectetur voluptatem, cupiditate corporis quae optio earum sed nobis. Magni, veritatis vel quis dicta voluptates ipsa ducimus similique quibusdam, ratione porro voluptas aliquid ipsam dolor officia. Quam dignissimos, maiores facilis ipsa ad quisquam minima iure perferendis laboriosam ratione laborum laudantium aspernatur deleniti quidem ab. At molestiae praesentium nulla. Voluptas consectetur similique temporibus nisi maxime unde, dolor voluptatum provident obcaecati iste in laboriosam suscipit sed aliquam mollitia excepturi ad ab quidem magni officiis dolorem perspiciatis! Esse magnam natus ipsam provident dolor reiciendis, aut beatae doloribus quam a. Odit itaque nisi ad iste. Eum libero, officia, quo impedit dolorem consectetur sit iste soluta voluptatem porro ab provident voluptates, asperiores odio sapiente alias aperiam tempore a minus! Cumque, omnis inventore! Temporibus doloribus consequatur placeat incidunt autem et.";
//   return (
//     <div className="min-h-screen max-w-4xl mx-auto p-4">
//       <div className="mb-4">
//         <CSubHeading text="About Us" />
//       </div>
//       <CParagraph text={text} />
//     </div>
//   );
// }

"use client";

import CParagraph from "@/components/CParagraph";
import CSubHeading from "@/components/CSubHeading";
import { useEffect, useState } from "react";

const API_ENDPOINT =
  "https://thepeak.merinasib.shop/api/v1/dashboard/settings/content/about_us";

export default function About() {
  const [title, setTitle] = useState("About Us");
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(API_ENDPOINT);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.code === 200 && result.data) {
          setTitle(result.data.title || "About Us");
          setContent(result.data.content);
        } else {
          throw new Error(
            result.message ||
              result.data.message ||
              "Failed to retrieve content."
          );
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not load about us content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutContent();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto p-4">
        <CSubHeading text="Loading Content..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto p-4">
        <CSubHeading text="Error Loading Page" />
        <CParagraph text={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <CSubHeading text={title} />
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
