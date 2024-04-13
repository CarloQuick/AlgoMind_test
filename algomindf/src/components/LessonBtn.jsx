import Link from "next/link";

export default function LessonBtn({ ds }) {
  return (
    <div>
      <div>
        <Link href={`/lessonmap/${ds}/1`}>{ds} 1</Link>
      </div>
      <div>
        <Link href={`/lessonmap/${ds}/2`}>{ds} 2</Link>
      </div>
      <div>
        <Link href={`/lessonmap/${ds}/3`}>{ds} 3</Link>
      </div>
    </div>
  );
}
