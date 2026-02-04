import { useState } from "react";

const StepYearsOfExperience = ({
  role,
  yearsExperience,
  updateData,
  next,
  back,
}) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (yearsExperience === null) {
      setError("Please enter your years of experience.");
      return;
    }

    if (!Number.isInteger(yearsExperience)) {
      setError("Years of experience must be a whole number.");
      return;
    }

    if (yearsExperience < 0) {
      setError("Years of experience cannot be negative.");
      return;
    }

    if (role === "student" && yearsExperience !== 0) {
      setError("Students must have 0 years of experience.");
      return;
    }

    if (role !== "student" && yearsExperience < 1) {
      setError("Please enter at least 1 year of experience.");
      return;
    }

    setError("");
    next();
  };

  return (
    <div>
      <h2>Years of experience</h2>

      <p>Role selected: {role}</p>

      <input
        type="number"
        value={yearsExperience ?? ""}
        min={0}
        max={role === "student" ? 0 : undefined}
        onChange={(e) => updateData("yearsExperience", Number(e.target.value))}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {back && <button onClick={back}>Back</button>}
        <button onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default StepYearsOfExperience;
