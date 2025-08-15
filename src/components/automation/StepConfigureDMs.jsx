"use client";

export default function StepConfigureDMs({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const dm = formData.dmConfig;

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      dmConfig: { ...dm, [field]: value },
    });
  };

  const handleCtaChange = (index, field, value) => {
    const newCtas = [...dm.ctas];
    newCtas[index][field] = value;
    updateField("ctas", newCtas);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Configure DMs</h2>

      {/* DM trigger type */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Send DM to:</label>
        <select
          value={dm.type}
          onChange={(e) => updateField("type", e.target.value)}
          className="border rounded-lg p-2 w-full"
        >
          <option value="all">All commenters</option>
          <option value="keywords">
            Comments containing specific keywords
          </option>
        </select>
      </div>

      {dm.type === "keywords" && (
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            value={dm.keywords}
            onChange={(e) => updateField("keywords", e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>
      )}

      {/* DM type */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">DM Type</label>
        <select
          value={dm.dmType}
          onChange={(e) => updateField("dmType", e.target.value)}
          className="border rounded-lg p-2 w-full"
        >
          <option value="text">Normal text message</option>
          <option value="media">Media + text message</option>
          <option value="carousel">Product carousel</option>
          <option value="card">Card</option>
        </select>
      </div>

      {/* DM type specific inputs */}
      {dm.dmType === "text" && (
        <textarea
          value={dm.text}
          onChange={(e) => updateField("text", e.target.value)}
          placeholder="Enter message"
          className="border rounded-lg p-2 w-full mb-4"
          rows={4}
        />
      )}

      {dm.dmType === "media" && (
        <>
          <textarea
            value={dm.text}
            onChange={(e) => updateField("text", e.target.value)}
            placeholder="Enter message"
            className="border rounded-lg p-2 w-full mb-4"
            rows={4}
          />
          <input
            type="file"
            onChange={(e) => updateField("image", e.target.files[0])}
            className="mb-4"
          />
        </>
      )}

      {dm.dmType === "carousel" && (
        <>
          <input
            type="text"
            value={dm.productTitle}
            onChange={(e) => updateField("productTitle", e.target.value)}
            placeholder="Product Title"
            className="border rounded-lg p-2 w-full mb-4"
          />
          <input
            type="file"
            onChange={(e) => updateField("image", e.target.files[0])}
            className="mb-4"
          />
        </>
      )}

      {dm.dmType === "card" && (
        <>
          <input
            type="text"
            value={dm.cardTitle}
            onChange={(e) => updateField("cardTitle", e.target.value)}
            placeholder="Card Title"
            className="border rounded-lg p-2 w-full mb-4"
          />
          <input
            type="text"
            value={dm.cardSubtitle}
            onChange={(e) => updateField("cardSubtitle", e.target.value)}
            placeholder="Card Subtitle"
            className="border rounded-lg p-2 w-full mb-4"
          />
          {dm.ctas.map((cta, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={cta.label}
                onChange={(e) =>
                  handleCtaChange(index, "label", e.target.value)
                }
                placeholder="Button Label"
                className="border rounded-lg p-2 w-1/2"
              />
              <input
                type="text"
                value={cta.url}
                onChange={(e) => handleCtaChange(index, "url", e.target.value)}
                placeholder="Button URL"
                className="border rounded-lg p-2 w-1/2"
              />
            </div>
          ))}
        </>
      )}

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg">
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-pink-600 text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
