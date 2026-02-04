import { useState } from "react";
import StepWorkSpaceName from "./StepWorkSpaceName";
import StepTeamSize from "./StepTeamSize";
import StepThemePreference from "./StepThemePreference";
import StepUserName from "./StepUserName";
import StepEmail from "./StepEmail";
import StepRole from "./StepRole";
import StepYearsOfExperience from "./StepYearsOfExperience";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [onboardingData, setOnboardingData] = useState({
    workspaceName: "",
    teamSize: 0,
    themePreference: null,
    userName: "",
    email: "",
    role: "",
    yearsExperience: 0,
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
    setCurrentStep((prev) => prev - 1);
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
          yearsExperience={onboardingData.yearsExperience}
          updateData={updateData}
          next={next}
          back={back}
        />
      )}
    </div>
  );
};

export default Onboarding;
