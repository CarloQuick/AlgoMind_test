import Link from "next/link";

export default function LessonBtn({ ds }) {
  return (
    <div>
      <div>
        <Link href={`/lessonmap/${ds}/1`}>Stack 1</Link>
      </div>
    </div>
  );
}
