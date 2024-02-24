
// Import necessary modules
import './styles.css'
import RegisterForm from "@/components/RegisterForm";
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


  // Define the Register component
export default function Register({ session }) {
    // Get the router
    const router = useRouter();
    useEffect(() => {
        // Check if the user is already logged in and redirect if needed
        if (session) {
          router.replace("/dashboard");
        }
      }, [session, router]);
    
      // If not logged in, render the RegisterForm component
      return <RegisterForm />;
  }

// Fetch session data on the server side
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
