import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Custom = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    Pic: '',
    customMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pay', { state: formData });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Customize Your Gift</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="recipientName" className="text-sm font-medium mb-2">Recipient Name</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            placeholder="Enter recipient's name"
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Pic" className="text-sm font-medium mb-2">Upload Photo</label>
          <input
            type="file"
            id="Pic"
            name="Pic"
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="customMessage" className="text-sm font-medium mb-2">Custom Message</label>
          <textarea
            id="customMessage"
            name="customMessage"
            value={formData.customMessage}
            onChange={handleChange}
            placeholder="Enter your wishes"
            required
            className="p-2 border border-gray-300 rounded-md text-sm resize-y h-24"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Custom;
