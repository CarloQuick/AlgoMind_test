import React, { useState, useEffect } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import Image from "next/image";
import congratulations from "../animation_lottie/congratulations.json";
import party_gator from "../images/party_gator.png";
import confetti from "canvas-confetti";
import Voicy_Confetti from "../audio/Voicy_Confetti.mp3";

const ConfettiDisplay = ( {onClose} ) => {
    // Reference: https://www.youtube.com/watch?v=U1T_J6Odoqg
    function play() {
        new Audio(Voicy_Confetti).play();
    }

    // Reference: https://www.kirilv.com/canvas-confetti/
    useEffect(() => {
        play();
        var count = 200;
        var defaults = {
        origin: { y: 0.5 }
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }
        fire(0.25, {
            spread: 36,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 70,
        });
        fire(0.35, {
            spread: 110,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 130,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 130,
            startVelocity: 45,
        });
    }, []);
    
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-sky-100">
            {/* Image centered at the bottom of the page */}
            <div className="absolute bottom-0 left-0 right-0 mb-14 flex justify-center">
                <Image 
                    src={party_gator} 
                    className="w-auto" 
                />
            </div> 
            <div style={{ width: "100%", height: "100%", marginTop: "-120px" }}> 
                <Lottie 
                    animationData={congratulations} 
                    loop={false}
                    autoPlay={false}
                    style={{ width: "100%", height: "100%" }} // Makes the animation take up the whole space
                />
            </div>
            <Link href="/dashboard">
                <button
                    className="absolute bottom-0 left-0 mb-4 ml-4 bg-yellow-300 uppercase font-semibold tracking-wider border-2 border-black px-3 py-2 z-10 hover:bg-yellow-400"
                >
                    DASHBOARD
                </button>
            </Link>
            <button
                onClick={onClose} // update to next level
                className="absolute bottom-0 right-0 mb-4 mr-7 bg-yellow-300 uppercase font-semibold tracking-wider border-2 border-black px-3 py-2 z-10 hover:bg-yellow-400"
            >
                NEXT LEVEL
            </button>
        </div>
    ); 
}

export default ConfettiDisplay