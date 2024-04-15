import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import { useSession } from "next-auth/react";
import { useEffect } from "react";



const ResetForm = ({ token}) => {
 
  const router = useRouter();
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const { data: session, status: sessionStatus } = useSession(); // Call useSession as a function

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ user }) => setUserDetails(user || {}))
      .catch((err) => console.error(err));
  }, [user]);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await fetch("/api/verify-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token
          }),
        });
        if (res.status === 400) {
          setError("Invalid token or has expired");
          setVerified(true);
        }
        if (res.status === 200) {
          setError("");
          setVerified(true);
          const userData = await res.json();
          setUser(userData);
        }
      } catch (error) {
        setError("Error, try again");
        console.log(error);
      }
    };
    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    try{
        const res = await fetch("/api/reset-password",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                email: user?.email
            })
        });
        if(res.status === 400){
            setError("Something web wrong, try again");
        }
        if(res.status === 200){
            setError("");
            router.push("/login");
        }
    }
    catch(error){
        setError("Error, try again");
        console.log(error);
    }
  };

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard"); // Corrected destination path
      return; // Return to prevent further execution
    }
  }, [sessionStatus, router]);

  if (sessionStatus === "loading" || !verified) {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#55b4f7] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">
            Reset Password
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline"
              placeholder="Password"
            />
            <button
              type="submit"
              disabled={error.length > 0}
              className="w-full bg-pink-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Reset Password
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
        </div>
      </div>
    )
  );
};

export default ResetForm;
