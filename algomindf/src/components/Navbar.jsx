"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import logo_text from "../images/logo_text.png";

export default function Navbar() {
  const { status } = useSession();
  return (
    <div className="bg-indigo-300 p-4 flex justify-between items-center border-b-4 shadow-md font-concert_one text-slate-700 text-2xl">
      <Link href="/dashboard"> {/* should this be directed to the dashboard or homepage? */}
        <Image 
          src={logo_text} 
          width={130} 
          height={130} 
          layout="fixed" 
        />
      </Link>

      {status === "authenticated" ? (
        <button
          onClick={() => signOut("google")}
          className="bg-slate-900 text-slate-700 px-6 py-2 rounded-md"
        >
          {/* Sign Out */}
        </button>
      ) : (
        <button 
          onClick={() => signIn("google")}
          className="bg-slate-900 text-slate-700 px-6 py-2 rounded-md"
        >
        {/* Sign In! */}
        </button>
      )}
    </div>
  );
}
