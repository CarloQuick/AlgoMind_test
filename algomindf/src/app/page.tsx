//import UserInfo from "@/components/UserInfo";
import LoginForm from "@/components/LoginForm";
import Homepage from "../../pages/homepage";
import "./globals.css";

export default async function Home() {
  //const session = await getServerSession(authOptions);

  //if (session) redirect("/dashboard");

  return (
    <main>
     <Homepage/>
    </main>
    // replace <UserInfo /> to <Homepage />
  );
}
