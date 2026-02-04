import { useState } from "react";

const StepUserName = ({ userName, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!userName.trim()) {
      setError("Username cannot be empty");
      return;
    }

    if (userName.length < 3) {
      setError("Username must be longer than 3 chars");
      return;
    }

    if (/\s/.test(userName)) {
      setError("Username cannot have any spaces");
      return;
    }

    setError("");
    next();
  };
  return (
    <div>
      <h2>Create your username</h2>

      <input
        className="border"
        type="text"
        value={userName}
        onChange={(e) => updateData("userName", e.target.value.trim())}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: 16 }}>
        {back && <button onClick={back}>Back</button>}
        <button onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default StepUserName;
