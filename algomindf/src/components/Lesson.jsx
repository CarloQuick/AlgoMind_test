import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { fetchData } from "next-auth/client/_utils";
import PopUpMsg from "./PopUpMsg";
import ProgressBar from "./ProgressBar";
import WrongAnswerMessage from "./WrongAnswerMessage";
async function getQuestions() {
  const res = await fetch("http://localhost:3000/api/lesson");
  return res.json();
}

// add sound effects: https://www.youtube.com/watch?v=fFytCcg723E&list=PLEVTJcDnFDm9lpEEHTftRa9JSRV4jY_p9&index=15

const LessonList = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [score, setScore] = useState(0);
  const { data: session } = useSession();

  const [userDetails, setUserDetails] = useState(null);
  const [userID, setUserID] = useState();
  const [newXp, setNewXp] = useState();
  const [tempXp, setTempXp] = useState();
  const [correct, setCorrect] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await getQuestions();
        console.log("API Data: ", questionData);

        if (Array.isArray(questionData.questions)) {
          const level0Questions = questionData.questions.filter(
            (question) => question.level === 0
          );
          setQuestions(level0Questions);
        } else {
          console.error("Invalid data format: 'questions' is not an array");
        }

        const userRes = await fetch("/api/user");
        const userData = await userRes.json();
        setUserID((userID) => (userID = userData.user._id));
        setUserDetails(userData);
        setTempXp((tempXp) => (tempXp = userData.user.xp));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("Current score:", score);
  // }, [score]);

  // const nextQuestion = () => {
  //   if (currentQuestionIndex < questions.length - 1) {
  //     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  //     setSelectedOption(null);
  //   }
  // };
  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  }

  const checkAnswer = async (e) => {
    e.preventDefault();

    // console.log("userID:", userID);
    // console.log("newXp before update:", tempXp);
    // console.log("pointValue:", questions[currentQuestionIndex].pointValue);

    const isCorrectAnswer =
      questions[currentQuestionIndex].correctAnswer ===
      questions[currentQuestionIndex].choices[selectedOption];

    // console.log("Is the answer correct?", isCorrectAnswer);

    const newXP = isCorrectAnswer
      ? tempXp + questions[currentQuestionIndex].pointValue
      : tempXp;

    // console.log("New XP after answer:", newXP);
    setNewXp(newXP);
    // console.log("Is the answer correct?", isCorrectAnswer);

    if (isCorrectAnswer) {
      const prevScore = score;
      setScore(prevScore + 1);
      nextQuestion();
      setCorrect(true);

      try {
        const response = await fetch(
          `http://localhost:3000/api/user/${userID}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              newXp: newXP,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update user XP");
        }
      } catch (error) {
        console.log("Error updating user XP:", error);
      }
    } else {
      setCorrect(false);
    }
    setShowScoreModal(true);
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const closeModal = () => {
    setShowScoreModal(false);
  };

  const tempProgressWidth = (score / questions.length) * 100;
  const progressWidth = tempProgressWidth > 100 ? "100%" : tempProgressWidth.toFixed(0) + "%";
  // const progressWidth = ((score / questions.length) * 100).toFixed(0) + "%";

  return (
    <div className="antialiased text-gray-900 bg-gray-200 mt-8">
      {/* {showScoreModal && (
        <PopUpMsg
          onClose={closeModal}
          score={score}
          totalQuestions={questions.length}
        />
      )} */}
      <h1 className="font-concert_one text-4xl text-center text-indigo-700 mb-2">
        Stack Lesson
      </h1>
      <h2 className="font-concert_one text-xl text-center mb-8">
        Level 1
      </h2>
      <div className="flex justify-center">
        <ProgressBar progressWidth={progressWidth} />
      </div>
      <div className="flex w-full h-screen justify-center items-center bg-gray-200">
        <div className="w-full max-w-xl p-3">
          {/* <h1 className="font-concert_one text-4xl text-center text-indigo-700 mb-8">
            Stack Lesson
          </h1> */}
          {/* <div className="mr-20">
            <ProgressBar progressWidth={progressWidth} />
          </div> */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full mt-8">
            {loading ? (
              <p>Loading...</p>
            ) : questions.length === 0 ? (
              <p>No questions available.</p>
            ) : (
              <div className="text-black">
                {/* <div className="mt-4 text-2xl text-white"> */}
                <div className="mt-4 text-xl text-white">
                  {questions[currentQuestionIndex].question}
                </div>

                <div className="flex flex-col w-full">
                  {questions[currentQuestionIndex].choices.map(
                    (choice, index) => (
                      <div key={index}>
                        <label className="flex items-center w-full py-3 pl-4 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-slate-300 rounded-md">
                          <input
                            type="radio"
                            className="w-4 h-4 bg-black"
                            checked={selectedOption === index}
                            onChange={() => handleOptionChange(index)}
                            name="answerOption"
                          />
                          <p className="ml-4">{choice}</p>
                        </label>
                      </div>
                    )
                  )}
                </div>

                {/* <button
                  onClick={nextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                  style={{ background: "#9fb9e5" }}
                >
                  Next Question
                </button> */}

              <div className="flex justify-center">
                <button
                  onClick={checkAnswer}
                  disabled={currentQuestionIndex === questions.length - 1}
                  // className="mt-4 bg-green-600 text-white px-12 py-2 rounded-md ml-auto"
                  // style={{ background: "#FFFF00" }}
                  className="mt-6 bg-yellow-300 uppercase font-semibold tracking-wider border-2 border-black ml-auto px-12 py-2"
                  style={{ background: "#fde047" }}     
                >
                Submit
                </button>
              </div>
                <div>
                  {correct ? "" : <WrongAnswerMessage correct={correct} />}
                </div>
              </div>
            )}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default LessonList;
