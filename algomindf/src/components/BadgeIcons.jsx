import Image from "next/image";
import sample_q_1 from "../images/sample_q_1.png";
import sample_q_2 from "../images/sample_q_2.png";

const BadgeIcons = () => {
  return (
    <div>
      <Image src={sample_q_1} width={275} height={275} alt="Sample Question 1" />
      <Image src={sample_q_2} width={275} height={275} alt="Sample Question 2" />
    </div>
  );
};

export default BadgeIcons;
