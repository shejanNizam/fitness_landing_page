"use client";

import DownloadNow from "@/components/DownloadNow";
import ExpectImprove from "@/components/ExpectImprove";
import GetPersonalPlan from "@/components/GetPersonalPlan";
import Navbar from "@/components/Navbar";
import PersonalPlanWithImproveArea from "@/components/PersonalPlanWithImproveArea";
import RatingWithSuccess from "@/components/RatingWithSuccess";
import RestorePurchase from "@/components/RestorePurchase";
import { useRef } from "react";

export default function Home() {
  const personalPlanRef = useRef(null);

  return (
    <>
      <Navbar getPlanRef={personalPlanRef} />
      <PersonalPlanWithImproveArea />
      <ExpectImprove />
      <GetPersonalPlan ref={personalPlanRef} />
      <RatingWithSuccess />
      <GetPersonalPlan />
      <RestorePurchase />
      <DownloadNow />
    </>
  );
}
