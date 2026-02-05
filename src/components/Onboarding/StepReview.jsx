const StepReviewAndSubmit = ({
  data,
  submit,
  isSubmitting,
  submitError,
  back,
}) => {
  return (
    <div className="w-full max-w-md mx-auto mt-24">
      <div className="bg-white rounded-xl border shadow-sm p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Review & finish
          </h2>
          <p className="text-sm text-gray-500">
            Please confirm your details before continuing.
          </p>
        </div>

        {/* Summary */}
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
            <strong>Workspace:</strong> {data.workspaceName}
          </li>
          <li>
            <strong>Team size:</strong> {data.teamSize}
          </li>
          <li>
            <strong>Theme:</strong> {data.themePreference}
          </li>
          <li>
            <strong>Username:</strong> {data.userName}
          </li>
          <li>
            <strong>Email:</strong> {data.email}
          </li>
          <li>
            <strong>Role:</strong> {data.role}
          </li>
          <li>
            <strong>Experience:</strong> {data.yearsExperience} years
          </li>
        </ul>

        {submitError && <p className="text-sm text-red-600">{submitError}</p>}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={back}
            disabled={isSubmitting}
            className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
          >
            ← Back
          </button>

          <button
            onClick={submit}
            disabled={isSubmitting}
            className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepReviewAndSubmit;
