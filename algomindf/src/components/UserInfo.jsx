//From video to create Login Page with MongoDB
"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"; //added later

//intial code
export default function UserInfo() {
  //added later
  //const { data: session } = useSession();

  //inital code
  return <div className="grid place-itmes-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Username: <span className="font-bold">{"username"}</span> 
        </div>
        <div>
          Email: <span className="font-bold">{"email"}</span>
        </div>
        <button onClick={() => signOut()} className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
          Log Out
        </button>
      </div>
    </div>;
}

//Google O
/*
"use client";
import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function Userinfo() {
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex-col gap-3 bg-yellow-200">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
        />
        <div>
          Welcome, <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
``;
*/