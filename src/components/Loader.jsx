import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 z-50">
      {/* Spinning square frame */}
      <div className="relative w-32 h-32">
        {/* Yellow spinning square border (ring effect) */}
        <div className="absolute rounded-full inset-0 border-[10px] border-blue-400 border-t-purple-700 animate-spin-square"></div>

        {/* Inner static white square */}
        {/* <div className="absolute inset-[10px] bg-pink-500 z-10 rounded-full nimate-spin-square"></div> */}
      </div>

      {/* Custom square spin animation */}
      <style>{`
        @keyframes spin-square {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-square {
          animation: spin-square 1.1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
