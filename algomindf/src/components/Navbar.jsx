"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { status } = useSession();
  return (
    <div className="bg-indigo-300 p-4 flex justify-between items-center border-b-4 shadow-md font-concert_one text-slate-700 text-2xl">
      <Link className="font-concert_one text-slate-700 text-2xl" href={"/"}>
        AlgoMind
      </Link>

      {status === "authenticated" ? (
        <button
          onClick={() => signOut("google")}
          className="bg-slate-900 text-slate-700 px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button 
          onClick={() => signIn("google")}
          className="bg-slate-900 text-slate-700 px-6 py-2 rounded-md"
        >
        Sign In!
        </button>
      )}
    </div>
  );
}
