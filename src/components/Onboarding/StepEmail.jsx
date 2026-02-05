import { useState } from "react";

const StepEmail = ({ email, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!email.includes(".")) {
      setError("Email must contain a dot");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain an @ symbol");
      return;
    }

    if (/\s/.test(email)) {
      setError("Email cannot contain spaces");
      return;
    }

    const emailRegex = /^[^@.]+@[^@.]+\.[^@.]+$/;

    if (!emailRegex.test(email)) {
      setError("Email format is invalid");
      return;
    }

    setError("");
    next();
  };

  return (
    <div className="w-full max-w-md mx-auto mt-24">
      <div className="bg-white rounded-xl border shadow-sm p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Add your email
          </h2>
          <p className="text-sm text-gray-500">
            We’ll use this to contact you and secure your account.
          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => updateData("email", e.target.value.trim())}
            placeholder="e.g. you@company.com"
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
          />

          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4">
          {back ? (
            <button
              onClick={back}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepEmail;
