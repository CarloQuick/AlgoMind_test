import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { fetchData } from "next-auth/client/_utils";
import PopUpMsg from "./PopUpMsg";
import ProgressBar from "./ProgressBar";
import WrongAnswerMessage from "./WrongAnswerMessage";
import ReactDOM from "react-dom/client";
import congratulation from "../audio/bell-congrat.mp3";
import fail from "../audio/failure.mp3";
import XPBurst from "./XPBurst";
import XPDisplay from "./XPDisplay";
import ConfettiDisplay from "./ConfettiDisplay";

const correctAudio = congratulation;
const failAudio = fail;

async function getQuestions() {
  const res = await fetch("http://localhost:3000/api/lesson");
  return res.json();
}
async function getUser() {
  const userRes = await fetch("/api/user");
  return userRes.json();
}

async function getUserProgress(userId) {
  const res = await fetch(`/api/user/${userId}/progress`);
  return res.json();
}

// add sound effects: https://www.youtube.com/watch?v=fFytCcg723E&list=PLEVTJcDnFDm9lpEEHTftRa9JSRV4jY_p9&index=15

const LessonList = ({ level, ds }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showXPBurst, setShowXPBurst] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);  
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [userID, setUserID] = useState();
  const [correct, setCorrect] = useState(true);

  const [xp, setXp] = useState();
  const [newLevel, setLevel] = useState(level);
  const [newDs, setDs] = useState(ds);
  const [correctSound] = useState(new Audio(correctAudio));
  const [failSound] = useState(new Audio(failAudio));
  const [userProgress, setUserProgress] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await getQuestions();
        // console.log("API Data: ", questionData);

        if (Array.isArray(questionData.questions)) {
          // console.log(newDs, " ", newLevel);
          const levelQuestions = questionData.questions.filter(
            (question) => question.level === newLevel && question.ds === newDs
          );
          setQuestions(levelQuestions);
          console.log("API Data: ", questions);
        } else {
          console.error("Invalid data format: 'questions' is not an array");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();

    const fetchUserData = async () => {
      try {
        const userData = await getUser();
        // console.log("User Data: ", userData);
        setXp((xp) => (xp = userData.user.xp));
        setUserID((userID) => (userID = userData.user._id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  
   //fetch user progress
   const fetchUserProgress = async () => {
    try {
      const userData= await getUser();
      // console.log("User Data: ", userData);
      const userId = userData.user._id;
      const progressData = await getUserProgress(userId);
      setUserProgress(progressData);
    } catch (error) {
      console.error("Error fetching user progress:", error);
    }
  };
  fetchUserProgress();
}, []);

useEffect(() => {
  if (showConfetti) {
      // If confetti is shown, delay showing the next question
      const delayTimer = setTimeout(() => {
          setShowNextQuestion(true); // Set showNextQuestion to true after a delay
          nextQuestion(); // Load the next question after a delay
      }, 2000); // Adjust the delay time as needed
      return () => clearTimeout(delayTimer); // Cleanup function
  }
}, [showConfetti]);


  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowNextQuestion(true);  //NEW
      setSelectedOption(null);
    }
  }

  console.log(questions);
  const checkAnswer = async (e) => {
    e.preventDefault();
    const isCorrectAnswer =
      questions[currentQuestionIndex].correctAnswer ===
      questions[currentQuestionIndex].choices[selectedOption];

    const newXP = isCorrectAnswer
      ? xp + questions[currentQuestionIndex].pointValue
      : xp;

    setXp(newXP);

    if (isCorrectAnswer) {
      // console.log("Correct answer! Playing correct sound...");
      correctSound.play();
      const prevScore = score;
      setScore(prevScore + 1);
      //nextQuestion();
      setCorrect(true);
      setShowXPBurst(true);
      if (currentQuestionIndex === questions.length - 1) {
        setCurrentQuestionIndex(0);
        const q = await getQuestions();
        setShowConfetti(true);
        setLevel(newLevel + 1);

        if (Array.isArray(q.questions)) {
          const updatedLevelQuestions = q.questions.filter(
            (question) =>
              question.level === newLevel + 1 && question.ds === newDs
          );
          setQuestions(updatedLevelQuestions);
          setScore(0);
        }
        // nextLevel = true;
      } else {
        nextQuestion();
      }

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
      setShowXPBurst(false);
      console.log("Incorrect answer! Playing fail sound...");
      failSound.play();
    }
    setShowScoreModal(true);
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const closeModal = () => {
    setShowScoreModal(false);
  };

  const closeConfetti = () => {
    setShowConfetti(false);
};

  const tempProgressWidth = (score / questions.length) * 100;
  const progressWidth =
    tempProgressWidth > 100 ? "100%" : tempProgressWidth.toFixed(0) + "%";
  return (
    <div className="antialiased text-gray-900 bg-gray-200 mt-8">
      {/* {showScoreModal && (
        <PopUpMsg
          onClose={closeModal}
          score={score}
          totalQuestions={questions.length}
        />
      )} */}
      {/* {showScoreModal && (
        <Confetti 
        onClose={closeModal} 
      />
      )} */}
      <h1 className="font-concert_one text-4xl text-center text-indigo-700 mb-2">
        {newDs} Lesson
      </h1>
      <h2 className="font-concert_one text-xl text-center mb-8">
        Level {newLevel}
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
                        <label
                          className={`flex items-center w-full py-3 pl-4 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-slate-300 rounded-md ${
                            selectedOption === index ? "border-yellow-300" : ""
                          } ${
                            correct &&
                            index ===
                              questions[currentQuestionIndex].correctAnswer
                              ? "border-green-400"
                              : ""
                          }`}
                        >
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
                <div className="flex justify-center">
                  <button
                    onClick={checkAnswer}
                    // disabled={currentQuestionIndex === questions.length - 1}
                    className="mt-6 bg-yellow-300 hover:bg-yellow-400 uppercase font-semibold tracking-wider border-2 border-black ml-auto px-12 py-2"
                  >
                    Submit
                  </button>
                  {showXPBurst ? <XPBurst xp={xp} correct={correct}/> : <XPDisplay xp={xp}/>}
                  {(correct && showConfetti) ? <ConfettiDisplay onClose={closeConfetti}/> : "" }
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