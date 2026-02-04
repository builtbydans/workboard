import { useState } from "react";

const OPTIONS = ["light", "dark", "system"];

const StepThemePreference = ({ themePreference, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleSelect = (value) => {
    updateData("themePreference", value);
    setError("");
  };

  const handleNext = () => {
    if (!themePreference) {
      setError("Please select a theme.");
      return;
    }
    next();
  };

  return (
    <div>
      <h2>Choose your theme</h2>

      <div style={{ display: "flex", gap: 12 }}>
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            style={{
              padding: "8px 12px",
              border:
                themePreference === opt ? "2px solid blue" : "1px solid gray",
            }}
          >
            {opt}
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

export default StepThemePreference;
