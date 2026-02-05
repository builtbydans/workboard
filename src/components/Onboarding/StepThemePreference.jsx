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
    <div className="w-full max-w-md mx-auto mt-24">
      <div className="bg-white rounded-xl border shadow-sm p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Choose your theme
          </h2>
          <p className="text-sm text-gray-500">
            You can change this later in settings.
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {OPTIONS.map((opt) => {
            const isSelected = themePreference === opt;

            return (
              <button
                key={opt}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`flex items-center justify-between rounded-md border px-4 py-3 text-sm transition-colors ${
                  isSelected
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="capitalize">{opt}</span>
                {isSelected && <span className="font-medium">✓</span>}
              </button>
            );
          })}
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4">
          {back ? (
            <button
              onClick={back}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThemePreference;
