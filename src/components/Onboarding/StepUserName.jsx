import { useState } from "react";

const StepUserName = ({ userName, updateData, next, back }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!userName.trim()) {
      setError("Username cannot be empty");
      return;
    }

    if (userName.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    if (/\s/.test(userName)) {
      setError("Username cannot contain spaces");
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
            Create your username
          </h2>
          <p className="text-sm text-gray-500">
            This will be visible to other members in your workspace.
          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <input
            type="text"
            value={userName}
            onChange={(e) => updateData("userName", e.target.value.trim())}
            placeholder="e.g. danishdev"
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

export default StepUserName;
