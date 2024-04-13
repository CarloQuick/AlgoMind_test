import LessonBtn from "../../../components/LessonBtn";

export default function LessonMapDs({ params }) {
  const { ds } = params;
  return <LessonBtn ds={ds} />;
}
