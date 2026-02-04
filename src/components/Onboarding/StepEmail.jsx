import { useState } from "react";

const StepEmail = ({ email, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!email.trim()) {
      setError("email is required");
      return;
    }

    if (!email.includes(".")) {
      setError("email must contain a dot");
      return;
    }

    if (!email.includes("@")) {
      setError("email must contain an @");
      return;
    }

    if (/\s/.test(email)) {
      setError("email cannot have any spaces");
      return;
    }

    const emailRegex = /^[^@.]+@[^@.]+\.[^@.]+$/;

    if (!emailRegex.test(email)) {
      setError("Email format is invalid.");
      return;
    }

    setError("");
    next();
  };
  return (
    <div>
      <h2>Create your email</h2>

      <input
        className="border"
        type="text"
        value={email}
        onChange={(e) => updateData("email", e.target.value.trim())}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: 16 }}>
        {back && <button onClick={back}>Back</button>}
        <button onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default StepEmail;
