import { useState } from "react";

const ROLES = ["student", "developer", "manager"];

const StepRole = ({ role, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleSelect = (value) => {
    updateData("role", value);
    setError("");
  };

  const handleNext = () => {
    if (!role) {
      setError("Please select your role.");
      return;
    }

    if (!ROLES.includes(role)) {
      setError("Invalid role selected.");
      return;
    }

    next();
  };

  return (
    <div>
      <h2>Select your role</h2>

      <div style={{ display: "flex", gap: 12 }}>
        {ROLES.map((r) => (
          <button
            key={r}
            onClick={() => handleSelect(r)}
            style={{
              border: role === r ? "2px solid blue" : "1px solid gray",
              padding: "8px 12px",
            }}
          >
            {r}
          </button>
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: 16 }}>
        {back && <button onClick={back}>Back</button>}
        <button onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default StepRole;
