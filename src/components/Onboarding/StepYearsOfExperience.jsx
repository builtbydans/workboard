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
    <div className="w-full max-w-md mx-auto mt-24">
      <div className="bg-white rounded-xl border shadow-sm p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Years of experience
          </h2>
          <p className="text-sm text-gray-500">
            Based on your role:{" "}
            <span className="font-medium capitalize text-gray-700">{role}</span>
          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <input
            type="number"
            min={0}
            max={role === "student" ? 0 : undefined}
            value={yearsExperience ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              updateData(
                "yearsExperience",
                value === "" ? null : Number(value),
              );
              setError("");
            }}
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

export default StepYearsOfExperience;
