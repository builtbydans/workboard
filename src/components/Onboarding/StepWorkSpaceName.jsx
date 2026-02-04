import { useState } from "react";

const StepWorkSpaceName = ({ workspaceName, updateData, next }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!workspaceName.trim()) {
      setError("Workspace name is required");
      return;
    }

    setError("");
    next();
  };

  return (
    <div>
      <h2>Create your workspace</h2>

      <input
        className="border"
        type="text"
        value={workspaceName}
        onChange={(e) => updateData("workspaceName", e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleNext}>Continue</button>
    </div>
  );
};

export default StepWorkSpaceName;
