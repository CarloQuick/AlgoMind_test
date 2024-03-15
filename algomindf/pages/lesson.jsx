'use client'

//From video to create Login Page with MongoDB
import "./styles.css";
import "../src/app/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";

import Lesson from "../src/components/Lesson";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter()

  return (
    <><button type="button" onClick={() => router.push('/lesson')}>Stacks Lesson</button>
    <SessionProvider>
      <Lesson />
    </SessionProvider></>
  );
}