import React, { useState } from 'react';
import Image from "next/image"; 
import sample_q_1 from "../images/sample_q_1.png";
import sample_q_2 from "../images/sample_q_2.png";
import progress_icon from "../images/user_db/progress_icon.png";
import badgeList from '/data/badgeList';
//import BadgeIcons from './BadgeIcons';

const SampleQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const sampleQuestionImages = [
//     // <Image src={sample_q_1} width="275" height="275"/>,
//     // <Image src={sample_q_2} width="275" height="275"/>,
//     // <Image src={progress_icon} width="100" height="100"/>
//     // "/images/sample_q_1.png",
//     // "/images/sample_q_2.png"
//   ]; 

    const sampleQuestionImages = badgeList.map((icon) => (
        <div key={icon.id}>
            <Image src={`/images/${icon.src}`} alt={icon.id} width={275} height={275} />
        </div>
  ));
  

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
      {/* <h2>Sample Questions</h2> */}
      <Image 
          src={currentQuestionIndex === 0 ? sample_q_1 : sample_q_2} // Display sample_q_1 or sample_q_2 based on index
          width={400}
          height={400}
          alt={`Question ${currentQuestionIndex + 1}`} 
      />
      <div className="flex justify-center mt-4 space-x-6 transform translate-y-7">
        <button 
            onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}
            className="px-5 h-10 uppercase font-semibold tracking-wider border-2 border-black bg-yellow-300 text-black"
        >
            Previous
        </button>
        <button 
            onClick={handleNextQuestion} disabled={currentQuestionIndex === sampleQuestionImages.length - 1}
            className="px-5 h-10 uppercase font-semibold tracking-wider border-2 border-black bg-yellow-300 text-black"
        >
            Next
        </button>
      </div>
    </div>
  );
};

export default SampleQuestions;