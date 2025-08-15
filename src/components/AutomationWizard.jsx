"use client";

import { useState } from "react";
import StepSelectPost from "./automation/StepSelectPost";
import StepAutomationType from "./automation/StepAutomationType";
import StepConfigureReplies from "./automation/StepConfigureReplies";
import StepConfigureDMs from "./automation/StepConfigureDMs";
import StepReview from "./automation/StepReview";

export default function AutomationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedPost: null,
    automationType: "",
    replyConfig: {
      type: "all",
      keywords: "",
      message: "",
    },
    dmConfig: {
      type: "all",
      keywords: "",
      dmType: "text",
      text: "",
      image: null,
      productTitle: "",
      cardTitle: "",
      cardSubtitle: "",
      ctas: [{ label: "", url: "" }],
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  console.log("step", step);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {step === 1 && (
        <StepSelectPost
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <StepAutomationType
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 &&
        (formData.automationType === "reply" ||
          formData.automationType === "both") && (
          <StepConfigureReplies
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
      {step === 4 &&
        (formData.automationType === "dm" ||
          formData.automationType === "both") && (
          <StepConfigureDMs
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
      {step === 5 && <StepReview formData={formData} prevStep={prevStep} />}
    </div>
  );
}
