//from next.js: https://nextjs.org/docs/messages/css-global
import './styles.css'
//From video to create Login Page with MongoDB
import RegisterForm from "@/components/RegisterForm"
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../src/app/api/auth/[...nextauth]/route'

export default async function Register() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard"); // if logged in, redirect to dashboard

    return <RegisterForm />;
}