"use client";
import Lesson from "../../../../../src/components/Lesson";
export default function LessonPage({ params }) {
  const { level, ds } = params;

  return <Lesson level={parseInt(level)} ds={ds} />;
}
