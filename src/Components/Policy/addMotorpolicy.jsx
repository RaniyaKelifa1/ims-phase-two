import React, { useState } from 'react';

function AddPolicyForm() {
  const [formData, setFormData] = useState({
    PolicyNo: '',
    ClientID: '',
    ProviderID: '',
    OptionID: '',
    Branch: '',
    Premium: '',
    PolicyPeriodStart: '',
    PolicyPeriodEnd: '',
    GeographicalArea: '',
    Commission: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/imlservertwo/policies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to add policy');
      }

      const result = await response.json();
      alert(`Policy added successfully with ID: ${result.policyID}`);
    } catch (err) {
      console.error('Error adding policy:', err);
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Add New Policy</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Policy Number
          </label>
          <input
            type="text"
            name="PolicyNo"
            value={formData.PolicyNo}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Client ID
          </label>
          <input
            type="text"
            name="ClientID"
            value={formData.ClientID}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Provider ID
          </label>
          <input
            type="text"
            name="ProviderID"
            value={formData.ProviderID}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Option ID
          </label>
          <input
            type="text"
            name="OptionID"
            value={formData.OptionID}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Branch
          </label>
          <input
            type="text"
            name="Branch"
            value={formData.Branch}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Premium
          </label>
          <input
            type="text"
            name="Premium"
            value={formData.Premium}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Policy Period Start
          </label>
          <input
            type="date"
            name="PolicyPeriodStart"
            value={formData.PolicyPeriodStart}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Policy Period End
          </label>
          <input
            type="date"
            name="PolicyPeriodEnd"
            value={formData.PolicyPeriodEnd}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Geographical Area
          </label>
          <input
            type="text"
            name="GeographicalArea"
            value={formData.GeographicalArea}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Commission
          </label>
          <input
            type="text"
            name="Commission"
            value={formData.Commission}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Add Policy
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPolicyForm;
