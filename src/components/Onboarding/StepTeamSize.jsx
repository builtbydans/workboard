import { useState } from "react";

const StepTeamSize = ({ teamSize, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (teamSize === null) {
      setError("Please enter your team size.");
      return;
    }

    if (!Number.isInteger(teamSize) || teamSize < 1) {
      setError("Team size must be 1 or greater.");
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
          <h2 className="text-2xl font-semibold text-gray-900">Team size</h2>
          <p className="text-sm text-gray-500">
            How many people will be in your workspace?
          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <input
            type="number"
            min={1}
            value={teamSize ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              updateData("teamSize", value === "" ? null : Number(value));
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

export default StepTeamSize;
