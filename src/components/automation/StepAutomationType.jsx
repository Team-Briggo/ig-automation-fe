"use client";

export default function StepAutomationType({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const options = [
    { value: "dm", label: "Send a DM to commenters" },
    { value: "reply", label: "Reply to comments" },
    { value: "both", label: "Send both" },
  ];

  const handleSelect = (value) => {
    setFormData({ ...formData, automationType: value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Choose Automation Type</h2>
      <div className="space-y-4">
        {options.map((opt) => (
          <div
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={`p-4 border rounded-lg cursor-pointer ${
              formData.automationType === opt.value
                ? "border-pink-500 bg-pink-50"
                : "border-gray-300"
            }`}
          >
            {opt.label}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg">
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={!formData.automationType}
          className="px-6 py-2 bg-pink-600 text-white rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
