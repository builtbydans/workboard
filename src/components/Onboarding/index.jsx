import { useState } from "react";
import StepWorkSpaceName from "./StepWorkSpaceName";
import StepTeamSize from "./StepTeamSize";
import StepThemePreference from "./StepThemePreference";
import StepUserName from "./StepUserName";
import StepEmail from "./StepEmail";
import StepRole from "./StepRole";
import StepYearsOfExperience from "./StepYearsOfExperience";
import StepReviewAndSubmit from "./StepReview";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [onboardingData, setOnboardingData] = useState({
    workspaceName: "",
    teamSize: null,
    themePreference: null,
    userName: "",
    email: "",
    role: null,
    yearsExperience: null,
  });

  const updateData = (key, value) => {
    setOnboardingData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const next = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const back = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const submitOnboarding = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(onboardingData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit onboarding");
      }

      const result = await response.json();
      console.log("Onboarding complete:", result);

      // Example next steps:
      // navigate("/dashboard");
      // or set some `onboardingComplete` flag
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {currentStep === 0 && (
        <StepWorkSpaceName
          workspaceName={onboardingData.workspaceName}
          updateData={updateData}
          next={next}
        />
      )}
      {currentStep === 1 && (
        <StepTeamSize
          teamSize={onboardingData.teamSize}
          updateData={updateData}
          next={next}
          back={back}
        />
      )}
      {currentStep === 2 && (
        <StepThemePreference
          themePreference={onboardingData.themePreference}
          updateData={updateData}
          next={next}
          back={back}
        />
      )}
      {currentStep === 3 && (
        <StepUserName
          userName={onboardingData.userName}
          updateData={updateData}
          next={next}
          back={back}
        />
      )}
      {currentStep === 4 && (
        <StepEmail
          email={onboardingData.email}
          updateData={updateData}
          next={next}
          back={back}
        />
      )}
      {currentStep === 5 && (
        <StepRole
          role={onboardingData.role}
          updateData={updateData}
          next={next}
          back={back}
        />
      )}
      {currentStep === 6 && (
        <StepYearsOfExperience
          role={onboardingData.role}
          yearsExperience={onboardingData.yearsExperience}
          updateData={updateData}
          next={next}
          back={back}
        />
      )}
      {currentStep === 7 && (
        <StepReviewAndSubmit
          data={onboardingData}
          submit={submitOnboarding}
          isSubmitting={isSubmitting}
          submitError={submitError}
          back={back}
        />
      )}
    </div>
  );
};

export default Onboarding;
