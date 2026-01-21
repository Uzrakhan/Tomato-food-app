import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform transition-all animate-scale-up">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h2>
        <p className="text-gray-500 mb-8">
          Your delicious food is being prepared and will be delivered shortly.
        </p>

        <button
          onClick={() => navigate('/orders')}
          className="w-full bg-red-500 text-white font-bold py-3 rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-200"
        >
          Track My Order
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;