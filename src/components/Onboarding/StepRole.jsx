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
    <div className="w-full max-w-md mx-auto mt-24">
      <div className="bg-white rounded-xl border shadow-sm p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Select your role
          </h2>
          <p className="text-sm text-gray-500">
            This helps us tailor the experience for you.
          </p>
        </div>

        {/* Role options */}
        <div className="grid grid-cols-1 gap-3">
          {ROLES.map((r) => {
            const isSelected = role === r;

            return (
              <button
                key={r}
                type="button"
                onClick={() => handleSelect(r)}
                className={`flex items-center justify-between rounded-md border px-4 py-3 text-sm transition-colors ${
                  isSelected
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="capitalize">{r}</span>

                {isSelected && (
                  <span className="text-blue-600 font-medium">✓</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Error */}
        {error && <p className="text-sm text-red-600">{error}</p>}

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

export default StepRole;
