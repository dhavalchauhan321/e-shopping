import React, { useState } from 'react';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';

const Payment = ({ total, onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cart
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <CreditCard className="w-6 h-6 mr-2" />
              Payment Details
            </h2>
            <div className="flex items-center text-green-600">
              <Lock className="w-4 h-4 mr-1" />
              <span className="text-sm">Secure Payment</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Amount to Pay:</span>
              <span className="text-2xl font-bold">{total.toFixed(2)} EGP</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full w-full"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                maxLength="19"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  maxLength="5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  maxLength="3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <Lock className="w-4 h-4 mr-2" />
              Pay {total.toFixed(2)} EGP
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-4">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=30&fit=crop" alt="Visa" className="h-8" />
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=30&fit=crop" alt="Mastercard" className="h-8" />
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=30&fit=crop" alt="American Express" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;