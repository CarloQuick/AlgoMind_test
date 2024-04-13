"use client";

//From video to create Login Page with MongoDB
//import "./styles.css";
import "../src/app/globals.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import ShadowBox from "../src/components/ShadowBox";
import DBLayout from "../src/components/DBLayout"; // user dashboard layout
import books2 from "../src/images/lesson/books2.png";
import queue3 from "../src/images/lesson/queue3.png";
import list4 from "../src/images/lesson/list4.png";
import { useEffect, useState } from "react";
import Lesson from "../src/components/Lesson";

import {
  BrowserRouter as Router,
  Route,
  Link as OtherLink,
} from "react-router-dom";

async function getQuestions() {
  const res = await fetch("http://localhost:3000/api/lesson");
  return res.json();
}
async function getUser() {
  const userRes = await fetch("/api/user");
  return userRes.json();
}

export default function Dashboard() {
  const [questions, setQuestions] = useState([]);
  const [lesson, setLesson] = useState(false);
  const [newLevel, setLevel] = useState();
  const [newDs, setDs] = useState();
  const stack = { ds: "Stack" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await getQuestions();
        setQuestions(questionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const fetchUserData = async () => {
      try {
        const userData = await getUser();
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);
  //
  const router = useRouter();

  function renderLesson(level, ds) {
    let temp = !lesson;
    setLesson(temp);
    setLevel(level);
    setDs(ds);
  }

  return (
    <SessionProvider>
      <DBLayout>
        <div className="text-center">
          {/* add user's name after Welcome */}
          <h1 className="my-16 font-concert_one text-2xl text-slate-600">
            Welcome! Let's start learning.
          </h1>
          <div className="py-1 max-w-6xl auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-f8">
            <ShadowBox>
              Stack
              <Link href="/lesson">
                <div>
                  <Image
                    src={books2}
                    alt="Stack"
                    width={100}
                    height={100}
                    // Reference: https://github.com/btahir/next-shopify-starter/blob/main/components/ProductCard.js
                    className="transform duration-500 ease-in-out hover:scale-110 mt-10"
                  />
                </div>
              </Link>
              <button onClick={() => renderLesson(0, "stack")}>Lesson 0</button>
              <button onClick={() => renderLesson(1, "stack")}>Lesson 1</button>
            </ShadowBox>
            <ShadowBox>
              Queue
              {/* update link below */}
              {/* <Link> href="/____"*/}
              <div>
                <Image
                  src={queue3}
                  alt="Queue"
                  width={135}
                  height={135}
                  className="transform duration-500 ease-in-out hover:scale-110 mt-5"
                />
              </div>
              {/* </Link> */}
              <Link href={"/lessonmap/Stack"}>stack</Link>
              <Link href={"/lessonmap/Queue"}>queue</Link>
            </ShadowBox>
            <ShadowBox>
              List
              {/* update link below */}
              {/* <Link> href="/___" */}
              <div>
                <Image
                  src={list4}
                  alt="List"
                  width={140}
                  height={140}
                  className="transform duration-500 ease-in-out hover:scale-110 pl-8 mt-10"
                />
              </div>
              {/* </Link> */}
            </ShadowBox>
          </div>
        </div>
      </DBLayout>
    </SessionProvider>
  );
}
