import { useState } from "react";

const StepTeamSize = ({ teamSize, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (teamSize < 1) {
      setError("Team Size must be 1 or greater");
      return;
    }

    setError("");
    next();
  };

  return (
    <div>
      <h2>Create your team size</h2>

      <input
        className="border"
        type="number"
        min={1}
        value={teamSize}
        onChange={(e) => updateData("teamSize", e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: 16 }}>
        {back && <button onClick={back}>Back</button>}
        <button onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default StepTeamSize;
