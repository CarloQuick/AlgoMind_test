import React from "react";

const XPDisplay = ({ xp }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', top: '335px', left: '785px' }}> 
      <div style={{ transform: 'scale(0.25)' }}> {/* Adjust scale of the animation*/}
        <h2 className="text-7xl font-concert_one -mt-40">My XP: {xp}</h2>
      </div>
    </div>
  );
};

export default XPDisplay;
