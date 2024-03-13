"use client";

//From video to create Login Page with MongoDB
import "./styles.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Question from "../src/components/Question";
import UserInfo from "../src/components/UserInfo";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    // <><button type="button" onClick={() => router.push('/lesson')}>Stacks Lesson</button>
    <SessionProvider>
      <UserInfo />
      <Question />
    </SessionProvider>
    //</>
  );
}
