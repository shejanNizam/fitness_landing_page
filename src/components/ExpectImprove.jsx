import Image from "next/image";
import image from "../assets/improvement/expect_improvement.png";

export default function ExpectImprove() {
  return (
    <>
      <h2 className="text-3xl font-bold my-4">When to expect improvements</h2>
      <p className="my-4">
        Based on your data you can reach noticeable improvements
      </p>
      <Image
        src={image}
        alt="expect_improvement"
        className="w-[60%] h-[60%] mx-auto my-8"
      />
    </>
  );
}
