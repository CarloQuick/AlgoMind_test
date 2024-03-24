/*
Resources: 
https://www.youtube.com/watch?v=aXXZwyeTJ98 
https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
https://nodejs.org/api/fs.html#promise-example
https://nodejs.org/api/fs.html 
https://www.geeksforgeeks.org/stack-in-cpp-stl/ 
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


*/
import "./styles.css";
import React from "react";
import { getSession } from 'next-auth/react';
import { SessionProvider } from "next-auth/react";
import CodeEditor from "@/components/CodeEditor";
import Navbar from "../src/components/Navbar"
import { useRouter } from "next/navigation";
import UserInfo from "../src/components/UserInfo";

export default function CodeEditorPage() {
    const router = useRouter();
  
    //Session Provider wrapper needed to get
    return (
      <>
        <button className="mt-4 border-2 bg-blue-500 px-4 py-2 rounded-md"
        style={{ background: "#33A5FF" }} 
        type="button" 
        onClick={() => router.push("/dashboard")}>
          Return to Dashboard
        </button>
        <SessionProvider>
          <UserInfo/> 
          <CodeEditor/>
        </SessionProvider>
        
      </>
    );
  }
  
// Fetch session data on the server side
export async function getServerSideProps(context) {
  const fs = require('fs');
  console.log("test code-codeeditor");
  const session = await getSession(context);
  //fs.
  return {
    props: {
      session,
    },
  };
}
