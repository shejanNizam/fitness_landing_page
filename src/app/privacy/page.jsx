import CParagraph from "@/components/CParagraph";
import CSubHeading from "@/components/CSubHeading";

export default function Privacy() {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, magni quidem? Cupiditate nesciunt maxime mollitia blanditiis explicabo ad ipsam, eligendi asperiores ullam eos, sed, temporibus numquam minus voluptates! Aperiam, explicabo. Repellat voluptatibus vero, modi provident eligendi et voluptas exercitationem nisi eaque sunt sint cum ipsa aperiam expedita quibusdam placeat eveniet eius nulla rerum eum! Vero, quaerat deserunt amet dolores maiores ab quia eum accusantium, architecto accusamus dolorum numquam. Consequatur maiores distinctio sunt nostrum quod reiciendis quidem consectetur voluptatem, cupiditate corporis quae optio earum sed nobis. Magni, veritatis vel quis dicta voluptates ipsa ducimus similique quibusdam, ratione porro voluptas aliquid ipsam dolor officia. Quam dignissimos, maiores facilis ipsa ad quisquam minima iure perferendis laboriosam ratione laborum laudantium aspernatur deleniti quidem ab. At molestiae praesentium nulla. Voluptas consectetur similique temporibus nisi maxime unde, dolor voluptatum provident obcaecati iste in laboriosam suscipit sed aliquam mollitia excepturi ad ab quidem magni officiis dolorem perspiciatis! Esse magnam natus ipsam provident dolor reiciendis, aut beatae doloribus quam a. Odit itaque nisi ad iste. Eum libero, officia, quo impedit dolorem consectetur sit iste soluta voluptatem porro ab provident voluptates, asperiores odio sapiente alias aperiam tempore a minus! Cumque, omnis inventore! Temporibus doloribus consequatur placeat incidunt autem et.";
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <CSubHeading text="Privacy Policy" />
      </div>
      <CParagraph text={text} />
    </div>
  );
}

// const API_ENDPOINT =
//   "https://thepeak.merinasib.shop/api/v1/dashboard/settings/content/privacy_policy";
