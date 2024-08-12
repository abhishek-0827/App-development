import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Pay = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Card');

  const navigate = useNavigate();
  const location = useLocation();
  const { recipientName, customMessage, price } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentInfo = {
      recipientName,
      customMessage,
      cardHolderName: paymentMethod === 'Card' ? cardHolderName : 'Pay on Delivery',
      amount: price,
      paymentMethod
    };
    navigate('/receipt', { state: paymentInfo });
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
      <div className="w-full max-w-sm mb-8">
        <div className="bg-gradient-to-br from-yellow-300 to-red-400 rounded-lg p-4 text-white">
          <div className="flex flex-col justify-between h-32">
            <div className="text-lg font-bold">VISA</div>
            <div className="text-xl tracking-wider">{cardNumber}</div>
            <div className="flex justify-between text-sm">
              <div>
                <label className="block text-xs">Card Holder</label>
                <div className="mt-1">{cardHolderName}</div>
              </div>
              <div>
                <label className="block text-xs">Expires</label>
                <div className="mt-1">{expiryDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="paymentMethod" className="text-sm font-medium mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="Card">Card Payment</option>
            <option value="PayOnDelivery">Pay on Delivery</option>
          </select>
        </div>

        {paymentMethod === 'Card' && (
          <>
            <div className="flex flex-col">
              <label htmlFor="cardNumber" className="text-sm font-medium mb-2">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
                className="p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cardHolder" className="text-sm font-medium mb-2">Card Holder</label>
              <input
                type="text"
                id="cardHolder"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                placeholder="John Doe"
                required
                className="p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="expiryDate" className="text-sm font-medium mb-2">Expiry Date</label>
              <input
                type="month"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
                className="p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvv" className="text-sm font-medium mb-2">CVV</label>
              <input
                type="password"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength={3}
                required
                className="p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </>
        )}

        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium mb-2">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            readOnly
            className="p-2 border border-gray-300 rounded-md text-sm bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          {paymentMethod === 'Card' ? 'Pay' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Pay;
