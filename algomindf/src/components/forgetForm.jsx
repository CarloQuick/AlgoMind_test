import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const ForgetForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    const {data: session, status: sessionStatus} = useSession(); // Call useSession as a function

    useEffect(() => {
        if(sessionStatus === "authenticated"){
            router.replace("/dashboard"); // Corrected destination path
            return; // Return to prevent further execution
        }
    }, [sessionStatus, router]);

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;

        if(!isValidEmail(email)){
            setError("Email is invalid");
            return;
        }
        // Handle form submission logic
        try {
            //added when checking for userExists
            // const resUserExists = await fetch("api/userExists", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({ email }),
            // });
      
            // const { user } = await resUserExists.json();
      
        
      
            //initial code in try-catch
            const res = await fetch("api/forgetpassword", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email
              }),
            });
            if(res.status === 400){
                setError("User with this email is not registered.");
            }
            if(res.status === 200){
                setError("");
                router.push("/login");
            }
      
          
          } catch (error) {
            console.log("Error, try again: ", error);
          }
        };
    

    if(sessionStatus === "loading"){
        return <h1>Loading...</h1>;
    }

    return(
        sessionStatus !== "authenticated" && (
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="bg-[#70b0d7] p-8 rounded shadow-md w-96">
                    <h1 className="text-4xl text-center font-semibold mb-8">Forget Password</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline" 
                            placeholder="Email"
                        />
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-blue-600">
                            Submit
                        </button>
                        <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
                    </form>
                    <div className='text-center text-gray-500 mt-4'>- OR -</div>
                    <Link href="/login"> {/* Use href prop instead of className */}
                        <a className="block text-center text-blue-500 hover:underline mt-2">Login Here</a>
                    </Link>
                </div>
            </div>
        )
    );
};

export default ForgetForm;
