import DownloadNow from "@/components/DownloadNow";
import ExpectImprove from "@/components/ExpectImprove";
import GetPersonalPlan from "@/components/GetPersonalPlan";
import PersonalPlanWithImproveArea from "@/components/PersonalPlanWithImproveArea";
import RatingWithSuccess from "@/components/RatingWithSuccess";
import RestorePurchase from "@/components/RestorePurchase";

export default function Home() {
  return (
    <>
      <PersonalPlanWithImproveArea />
      <ExpectImprove />
      <GetPersonalPlan />
      <RatingWithSuccess />
      <GetPersonalPlan />
      <RestorePurchase />
      <DownloadNow />
    </>
  );
}
