// Import necessary modules
import "./styles.css";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ForgetForm from '../src/components/forgetForm';
import { SessionProvider } from "next-auth/react";

// Define the Register component
export default function forgetpassword({ session }) {
  return (
    <SessionProvider session={session}>
      <ForgetForm />
    </SessionProvider>
  );
}

// Fetch session data on the server side
// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// }
