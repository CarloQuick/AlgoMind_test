"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/q.css";

export default function question() {
  const hoverStyles = "hover:bg-gray-700 hover:border-gray-500";
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctAnswer = "d"; // Change this to the correct answer

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const renderCongratsMessage = () => {
    if (selectedAnswer === correctAnswer) {
      return (
        <div className="text-green-500 mt-2">
          Congrats! You picked the correct answer.
        </div>
      );
    } else if (selectedAnswer !== null) {
      return (
        <div className="text-red-500 mt-2">
          Sorry, that's incorrect. Try again!
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mt-5 my-1">
      <div className="question ml-5 pl-5 pt-2">
        <div className="py-2 text-lg font-bold">
          <b>Q. What is your favorite food ?</b>
        </div>
        <div className="ml-3 pl-5 pt-0 pt-3" id="options">
          <label
            className={`options flex items-center answer-button ${hoverStyles}`}
            onClick={() => handleAnswerSelect("a")}
          >
            <input type="radio" name="radio" className="hidden" />
            <span className="checkmark"></span>
            <span className="text ml-2">a. Pizza</span>
          </label>
          <label
            className={`options flex items-center answer-button ${hoverStyles}`}
            onClick={() => handleAnswerSelect("b")}
          >
            <input type="radio" name="radio" className="hidden" />
            <span className="checkmark"></span>
            <span className="text ml-2">b. Chicken Wings</span>
          </label>
          <label
            className={`options flex items-center answer-button ${hoverStyles}`}
            onClick={() => handleAnswerSelect("c")}
          >
            <input type="radio" name="radio" className="hidden" />
            <span className="checkmark"></span>
            <span className="text ml-2">c. Pasta</span>
          </label>
          <label
            className={`options flex items-center answer-button ${hoverStyles}`}
            onClick={() => handleAnswerSelect("d")}
          >
            <input type="radio" name="radio" className="hidden" />
            <span className="checkmark"></span>
            <span className="text ml-2">d. I LOVE ALL</span>
          </label>
        </div>
        {renderCongratsMessage()}
      </div>
    </div>
  );
}
