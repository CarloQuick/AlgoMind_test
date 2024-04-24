import Image from 'next/image';
import profile_gator from "../images/profile_gator.png";

export default function WrongAnswerMessage({ correct }) {
  if (!correct) {
    return (
      <div className="text-indigo-400 font-concert_one" style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "5px" }}>That's incorrect. Try again!</span>
        <Image 
          src={profile_gator} 
          width={55} 
          height={55} 
          layout="fixed" 
        />
      </div>
    )
  }
}
