import React from 'react';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {/* Card Container */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        
        {/* Top Accent Bar (Optional) */}
        <div className="h-2 bg-green-500 w-full"></div>

        <div className="p-8 flex flex-col items-center">
          {/* Animated Checkmark Icon */}
          <div className="animate-bounce-slow">
            <div className="rounded-full bg-green-100 p-4 flex items-center justify-center mb-6">
              <svg 
                className="w-12 h-12 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Success!
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Your payment has been completed successfully. We have sent a confirmation email to <span className="font-semibold text-gray-800">user@example.com</span>.
          </p>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <button 
              onClick={() => window.location.href = '/dashboard'} // Replace with your router logic
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md"
            >
              Go to Dashboard
            </button>
            
            <button 
              onClick={() => window.location.href = '/'} // Replace with your router logic
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Back to Home
            </button>
          </div>
        </div>

        {/* Footer / Help Link */}
        <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Need help? <a href="/contact" className="text-green-600 hover:text-green-700 font-medium hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;