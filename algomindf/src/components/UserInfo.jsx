import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UserInfo() {
  // Use the useSession hook to access the user session
  const { data: session } = useSession();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    console.log("getuser details");
    if (userDetails) {
      return;
    }
    fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((res) => console.log(res))
      .then((res) => res.json())
      .then(({ user }) => setUserDetails(user))
      .catch((err) => console.error(err));
  }, []);

  // Check if the session is not available
  if (!session) {
    // You can add a loading state or redirect to login if needed
    return <div>Loading...</div>;
  }

  // Destructure user details from the session
  const { user } = session;

  // Render the component with dynamic user information
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Username:{" "}
          <span className="font-bold">
            {user?.username || userDetails?.username || user?.email}
          </span>
        </div>
        <div>
          Email: <span className="font-bold">{user?.email}</span>
        </div>
        <div>
          Xp: <span className="font-bold">{user?.xp || userDetails?.xp}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
