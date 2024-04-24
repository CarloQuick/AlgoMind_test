import React from "react";
import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import star_burst from "../animation_lottie/star_burst.json";

const XPBurst = ({ xp, correct }) => {
  const ref = useRef();

  useEffect(() => {
    const xpBurst = () => {
      if (correct && ref.current) {
        ref.current.play();
      }
    };
    xpBurst();
  }, [correct]); 

  return (
    // <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', top: '-10px', left: '650px' }}> // this is for burst
    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', top: '150px', left: '785px' }}> 
      <div style={{ transform: 'scale(0.25)' }}> {/* Adjust scale of the animation*/}
        <Lottie 
          animationData={star_burst} 
          ref={ref.current}
          loop={false}
          autoPlay={false}
        />
        <h2 className="text-7xl font-concert_one -mt-40">My XP: {xp}</h2>
      </div>
    </div>
  );
};

export default XPBurst;
