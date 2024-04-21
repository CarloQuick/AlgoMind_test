import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ResetForm from "../../src/components/resetForm";
import { SessionProvider } from "next-auth/react";
import "../styles.css";


export default function ResetPasswordPage({ token }) {
  return (
    <SessionProvider>
  <ResetForm token={token} /></SessionProvider>)
}

export async function getServerSideProps(context) {
  const { token } = context.query;

  // Handle cases where the token is missing or invalid
  if (!token) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      token,
    },
  };
}


  
  