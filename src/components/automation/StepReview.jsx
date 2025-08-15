"use client";

export default function StepReview({ formData, prevStep }) {
  const handleSubmit = () => {
    console.log("Final automation setup:", formData);
    alert("Automation saved!");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Automation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        {JSON.stringify(formData, null, 2)}
      </pre>

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg">
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded-lg"
        >
          Save Automation
        </button>
      </div>
    </div>
  );
}
