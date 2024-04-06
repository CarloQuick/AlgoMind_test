"use client";

//From video to create Login Page with MongoDB
//import "./styles.css";
import "../src/app/globals.css";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { SessionProvider } from "next-auth/react";
import Question from "../src/components/Question";
// import UserInfo from "../src/components/UserInfo";
import { useRouter } from "next/navigation";
import ShadowBox from "../src/components/ShadowBox";
import DBLayout from "../src/components/DBLayout";  // user dashboard layout
import stack from "../src/images/lesson/stack.png";
import books2 from "../src/images/lesson/books2.png";
import queue from "../src/images/lesson/queue.png";
import books from "../src/images/lesson/books.png";
import queue3 from "../src/images/lesson/queue3.png";
import list4 from "../src/images/lesson/list4.png";


export default function Dashboard() {
  const router = useRouter();

  return (
    <SessionProvider>
      <DBLayout>
        <div className="text-center">
          {/* add user's name after Welcome */}
          <h1 className="my-16 font-concert_one text-2xl text-slate-600">Welcome! Let's start learning.</h1> 
            <div className="py-1 max-w-6xl auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-f8">
              <ShadowBox>Stack
                <Link href="/lesson">
                  <div>
                  <Image 
                      src={books2} 
                      alt="Stack" 
                      width={100} height={100}
                      // Reference: https://github.com/btahir/next-shopify-starter/blob/main/components/ProductCard.js
                      className="transform duration-500 ease-in-out hover:scale-110 mt-10" 
                    />
                  </div>    
                </Link>
              </ShadowBox>
              <ShadowBox>Queue
                {/* update link below */}
                {/* <Link> href="/____"*/}
                <div>
                  <Image 
                      src={queue3} 
                      alt="Queue" 
                      width={135} height={135}
                      className="transform duration-500 ease-in-out hover:scale-110 mt-5" 
                    />
                  </div>  
                {/* </Link> */}
              </ShadowBox>
              <ShadowBox>List
                {/* update link below */}
                {/* <Link> href="/___" */}
                <div>
                  <Image
                    src={list4}
                    alt="List"
                    width={140} height={140}
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
