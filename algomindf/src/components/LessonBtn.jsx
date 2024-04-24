import Link from "next/link";
import level1 from "../images/level1.png";
import level2 from "../images/level2.png";
import level3 from "../images/level3.png";
import Image from "next/image";

export default function LessonBtn({ ds }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" , paddingTop: "100px"}}>
      <div style={{ margin: "0 10px" }}>
        <Link href={`/lessonmap/${ds}/1`}>
          <Image src={level1} width={200} height={200} 
          className="transform duration-500 ease-in-out hover:scale-110 pl-8 mt-10"/>
        </Link>
      </div>
      <div style={{ margin: "0 10px" }}>
        <Link href={`/lessonmap/${ds}/2`}>
          <Image src={level2} width={150} height={180} 
          className="transform duration-500 ease-in-out hover:scale-110 pl-8 mt-10"/>
        </Link>
      </div>
      <div style={{ margin: "0 10px" }}>
        <Link href={`/lessonmap/${ds}/3`}>
          <Image src={level3} width={200} height={200} 
          className="transform duration-500 ease-in-out hover:scale-110 pl-8 mt-10"/>
        </Link>
      </div>
    </div>
  );
}
