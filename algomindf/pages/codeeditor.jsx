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
  console.log("test code-codeeditor");
  const session = await getSession(context);
  
  return {
    props: {
      session,
    },
  };
}
