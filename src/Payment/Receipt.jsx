import React from 'react';
import { useLocation } from 'react-router-dom';

const Receipt = () => {
  const location = useLocation();
  const receipt = location.state || {};
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = `${date}/${month}/${year}`;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-center text-2xl font-semibold mb-6">Payment Receipt</h2>
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex justify-between mb-4 border-b border-gray-300 pb-4">
          <h3 className="text-xl font-semibold">Receipt # {receipt.id}</h3>
          <p>Date: {currentDate}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between py-2">
            <span className="font-medium">Payed By:</span>
            <span>{receipt.cardHolderName}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Recipient Name:</span>
            <span>{receipt.recipientName}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Custom Message:</span>
            <span>{receipt.customMessage}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Total Amount:</span>
            <span>${receipt.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
