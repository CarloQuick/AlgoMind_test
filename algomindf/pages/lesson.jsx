// "use client";
import "./styles.css";
import "../src/app/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Lesson from "../src/components/Lesson";
import { useRouter } from "next/navigation";
import { connectMongoDB } from "@/lib/mongodb";
import UserInfo from "../src/components/UserInfo";

export default function L() {
  const router = useRouter();

  return (
    <>
      <button type="button" onClick={() => router.push("/lesson")}>
        Stacks Lesson
      </button>
      <SessionProvider>
        <UserInfo />
        <Lesson />
      </SessionProvider>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Update the fetch URL to the correct path: '/api/lesson'
    const res = await fetch("http://localhost:3000/api/lesson");
    const data = await res.json();
    const propsData = Array.isArray(data) ? data : [];
    return {
      props: {
        questions: propsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        questions: [],
      },
    };
  }
}
