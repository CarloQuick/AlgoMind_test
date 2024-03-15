import React from "react";
const PopUpMsg = ({ onClose, score, totalQuestions }) => {
  // Calculate percentage
  const percentage = ((score / totalQuestions) * 100).toFixed(2);
  return (
    <div
      className="fixed z-10 w-200 h-100 bg-pink shadow-md rounded-lg"
      style={{
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        width: "500px",
        height: "300px",
        background: "#f1f5f9",
        boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)"
      }}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold" style={{ paddingTop: '2em' }}>Your Score</h1>
        <p className="text-xl mt-1 mb-4">
          {score} / {totalQuestions} ({percentage}%)
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md border border-black"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default PopUpMsg;
