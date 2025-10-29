import Image from "next/image";
import image from "../assets/improvement/expect_improvement.png";
import CHeading from "./CHeading";
import CParagraph from "./CParagraph";

export default function ExpectImprove() {
  return (
    <>
      <CHeading text="When to expect improvements" />
      <div className="text-center">
        <CParagraph text="Based on your data you can reach noticeable improvements" />
      </div>
      <Image
        src={image}
        alt="expect_improvement"
        className="w-[60%] h-[60%] mx-auto my-8"
      />
    </>
  );
}
