// Might DELETE later


// Reference: https://github.com/btahir/next-shopify-starter/blob/main/components/ProductListings.js
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

// All images are from Flat Icons: https://www.flaticon.com/ 
import trophy1 from "../images/user_db/badge/trophy1.png";
import trophy2 from "../images/user_db/badge/trophy2.png";
import ribbon1 from "../images/user_db/badge/ribbon1.png";
import medal from "../images/user_db/badge/medal.png";
import thumbs_up from "../images/user_db/badge/thumbs_up.png";
import wreath from "../images/user_db/badge/wreath.png";
import ribbon2 from "../images/user_db/badge/ribbon2.png";
import ShadowBoxes from "./ShadowBoxes";

const BadgeLayout = () => {
    return (
        <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
                {/* <div className="flex justify-center font-concert_one h-72 border-b-2 border-palette-lighter relative"></div>   */}
                <div className="py-5 bg-orange-50 font-concert_one text-xl text-lime-800">
                    Stack
                </div>  
                    <div className="flex flex-wrap justify-center">
                        <div className="flex flex-col items-center m-7 mr-14">
                            <Image src={trophy1} width={65} height={65} layout="fixed"/>
                            <span className="font-concert_one text-small text-lime-800">Level 1</span>
                        </div>
                        <div className="flex items-center m-7">
                            <Image src={medal} width={65} height={65} layout="fixed"/>
                        </div>
                        <div className="flex items-center m-7 mr-14">
                            <Image src={ribbon1} width={65} height={65} layout="fixed"/>
                        </div>
                        <div className="flex items-center m-7">
                            <Image src={wreath} width={65} height={65} layout="fixed"/>
                        </div>
                    </div>
                </div>
            </div>   
            
    );
};

export default BadgeLayout;

