import { useState } from "react";

const StepWorkSpaceName = ({ workspaceName, updateData, next }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!workspaceName.trim()) {
      setError("Workspace name is required");
      return;
    }

    setError("");
    next();
  };

  return (
    <div className="w-full max-w-md mx-auto mt-24">
      <div className="bg-white rounded-xl shadow-sm border p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Create your workspace
          </h2>
          <p className="text-gray-500 text-sm">
            This will be the name of your workspace inside the app.
          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <input
            type="text"
            value={workspaceName}
            onChange={(e) => updateData("workspaceName", e.target.value)}
            placeholder="e.g. Acme Inc"
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
          />

          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <button
            onClick={handleNext}
            className="w-full rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepWorkSpaceName;
