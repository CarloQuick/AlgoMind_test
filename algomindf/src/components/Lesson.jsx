"use client";

import React, { useState, useEffect } from "react";
async function getQuestions() {
  const res = await fetch("http://localhost:3000/api/lesson");
  return res.json();
}

const LessonList = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuestions();
        console.log("API Data: ", data);

        // Check if 'data.questions' is an array before updating state
        if (Array.isArray(data.questions)) {
          // Filter questions for level 0
          const level0Questions = data.questions.filter(
            (question) => question.level === 0
          );
          setQuestions(level0Questions);
        } else {
          console.error("Invalid data format: 'questions' is not an array");
        }

        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  const nextQuestion = () => {
    // Move to the next question if there is one
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      // Reset selected option for the next question
      setSelectedOption(null);
    }
  };
  const checkAnswer = () => {
    if (
      questions[currentQuestionIndex].correctAnswer ===
      questions[currentQuestionIndex].choices[selectedOption]
    ) {
      console.log("nice!!!!");
    } else console.log("huh?");
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="antialiased text-gray-900 bg-gray-200">
      <div className="flex w-full h-screen justify-center items-center bg-gray-200">
        <div className="w-full max-w-xl p-3">
          <h1 className="font-bold text-5xl text-center text-indigo-700 mb-8">
            Stack Lesson
          </h1>
          <div className="bg-white p-4 rounded-lg shadow-lg w-full mt-8">
            {loading ? (
              <p>Loading...</p>
            ) : questions.length === 0 ? (
              <p>No questions available.</p>
            ) : (
              <div className="text-black">
                <p className="mb-4">
                  {questions[currentQuestionIndex].question}
                </p>
                <div className="flex flex-col w-full">
                  {questions[currentQuestionIndex].choices.map(
                    (choice, index) => (
                      <label
                        key={index}
                        className="flex items-center w-full py-3 pl-4 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-md"
                      >
                        <input
                          type="radio"
                          className="w-6 h-6 bg-black"
                          checked={selectedOption === index}
                          onChange={() => handleOptionChange(index)}
                          name="answerOption"
                        />
                        <p className="ml-4">{choice}</p>
                      </label>
                    )
                  )}
                </div>

                <button
                  onClick={nextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md ml-auto"
                  style={{ background: "#9fb9e5" }}
                >
                  Next Question
                </button>
                <button
                  onClick={checkAnswer}
                  className="mt-4 bg-green-600 text-white px-12 py-2 rounded-md ml-auto"
                  style={{ background: "#FFFF00" }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonList;
