import React from "react";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import Image from "next/image";
import confetti from "../animation_lottie/confetti.json";
import congratulations from "../animation_lottie/congratulations.json";
import party_gator from "../images/party_gator.png";

const Confetti = ({ onClose }) => {
    const router = useRouter();
    const handleDashboardClick = () => {
        router.push("/dashboard");
    };

    return (
        <div
            className="fixed z-10 w-300 h-100 bg-sky-100 shadow-md rounded-lg"
            style={{
            top: "100%",
            // top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            width: "670px",
            height: "490px",
            // width: "870px",
            // height: "750px",
            // width: "100%",
            // height: "100%",
            overflow: "hidden", // Ensures content doesn't overflow the container
            }}
        >
            {/* Image centered at the bottom of the page */}
            <div className="absolute bottom-0 left-0 right-0 mb-14 flex justify-center">
                <Image 
                    src={party_gator} 
                    className="w-auto" 
                />
            </div> 
            {/* <div style={{ width: "100%", height: "100%", marginTop: "-120px" }}> //this is used for congrats animation*/} 
            <div style={{ width: "100%", height: "100%" }}>
                <Lottie 
                    animationData={confetti}
                    // animationData={congratulations} 
                    loop={false}
                    autoPlay={false}
                    style={{ width: "100%", height: "100%" }} // Makes the animation take up the whole space
                />
            </div>
            {/* <button
                onClick={onClose}
                className="absolute top-0 right-0 mt-4 mr-7 font-bold text-2xl text-slate-400"
            >
                x
            </button> */}
            <button
                onClick={() => handleDashboardClick("dashboard")}
                className="absolute bottom-0 left-0 mb-4 ml-4 bg-yellow-300 uppercase font-semibold tracking-wider border-2 border-black px-3 py-2 z-10 hover:bg-yellow-400"
            >
                DASHBOARD
            </button>
            <button
                onClick={onClose} // update to next level
                className="absolute bottom-0 right-0 mb-4 mr-4 bg-yellow-300 uppercase font-semibold tracking-wider border-2 border-black px-3 py-2 z-10 hover:bg-yellow-400"
            >
                CONTINUE
            </button>
        </div>
    ); 
}

export default Confetti