//import UserInfo from "@/components/UserInfo";
import LoginForm from "@/components/LoginForm";
import "./globals.css";

export default async function Home() {
  //const session = await getServerSession(authOptions);

  //if (session) redirect("/dashboard");

  return (
    <main>
      <LoginForm />
    </main>
    // replace <UserInfo /> to <Homepage />
  );
}
