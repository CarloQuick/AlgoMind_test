import UserInfo from "@/components/UserInfo";
import "./globals.css";

const Home = () =>{
  return (
    // replace <UserInfo /> to <Homepage />
    <div className="grid place-items-center h-screen -mt-24">
      <UserInfo />
    </div>
  );
}

export default Home;
