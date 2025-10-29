import Image from "next/image";
import image from "../assets/restore/restore.png";
import CParagraph from "./CParagraph";
import CSubHeading from "./CSubHeading";

export default function RestorePurchase() {
  return (
    <div className="shadow-sm p-4 md:p-8 lg:p-12 rounded-lg max-w-5xl mx-auto text-center">
      <div className="w-full max-w-sm mx-auto">
        <Image
          src={image}
          alt="restore_image"
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="my-2">
        <CSubHeading text="Restore Purchase" />
      </div>
      <CParagraph text="The price of 1-year subscription $59.88. Account will be charged for renewal within 24 hours prior to the end of the current subscription period, the cost of the renewal will be indicated. The subscriptions renews automatically at the end of each period, until you cancel. The payment will be charged iTunes account at confirmation of purchase. To avoid being charged, cancel the subscription in your iTunes and App store/Apple ID account settings at least 24 hours before the end of the current subscription period. If you are unsure how to cancel a subscription, please visit the apple support website. Note that deleting the app does not cancel the subscription." />
    </div>
  );
}
