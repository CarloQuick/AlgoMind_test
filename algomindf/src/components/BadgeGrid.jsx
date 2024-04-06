import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import ShadowBox from "./ShadowBox";
import crest_gray from "../images/user_db/badge/crest_gray.png";
import medal_gray from "../images/user_db/badge/medal_gray.png";
import ribbon1_gray from "../images/user_db/badge/ribbon1_gray.png";
import ribbon2_gray from "../images/user_db/badge/ribbon2_gray.png";
import shield_gray from "../images/user_db/badge/shield_gray.png";
import light_bulb from "../images/user_db/badge/light_bulb.png";


const BadgeGrid = () => {
    return (
        <div className="py-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            <ShadowBox>Stack
                <div className="mt-2 grid grid-cols-2 gap-10">
                    <div className="text-center text-slate-600 text-sm font-concert_one">
                        <Image 
                            src={light_bulb} 
                            width={70} height={70}  
                        />
                <p className="mt-1">Level 1</p>
                </div>
                <div className="text-center text-slate-600 text-sm font-concert_one">
                <Image 
                    src={light_bulb} 
                    alt="Medal Gray" 
                    width={70} height={70}  
                />
                <p className="mt-1">Level 2</p>
                </div>
                <div className="text-center text-slate-600 text-sm font-concert_one">
                <Image 
                    src={light_bulb} 
                    alt="Ribbon1 Gray" 
                    width={70} height={70}  
                />
                <p className="mt-1">Level 3</p>
                </div>
                <div className="text-center text-slate-600 text-sm font-concert_one">
                <Image 
                    src={light_bulb} 
                    alt="Shield Gray" 
                    width={70} height={70}  
                />
                <p className="mt-1">Coding</p>
                </div>
                </div>                
            </ShadowBox>
            <ShadowBox>Queue
            <div className="mt-3 grid grid-cols-2 gap-10">
                <Image 
                    src={ribbon2_gray} 
                    alt="Ribbon2 Gray" 
                    width={70} height={70}  
                />
                <Image 
                    src={crest_gray} 
                    alt="Crest Gray" 
                    width={70} height={70}  
                />
                <Image 
                    src={crest_gray} 
                    alt="Crest Gray" 
                    width={70} height={70}  
                />
                <Image 
                    src={crest_gray} 
                    alt="Crest Gray" 
                    width={70} height={70}  
                />
                </div>                
            </ShadowBox>
            <ShadowBox>List
            <div className="mt-3 grid grid-cols-2 gap-10">
                <Image 
                    src={crest_gray} 
                    alt="Crest Gray" 
                    width={70} height={70}  
                />
                <Image 
                    src={crest_gray} 
                    alt="Crest Gray" 
                    width={70} height={70}  
                />
                <Image 
                    src={crest_gray} 
                    alt="Crest Gray" 
                    width={70} height={70}  
                />
                <Image 
                    src={crest_gray} 
                    alt="Crest Gray" 
                    width={70} height={70}  
                />
                </div>                
            </ShadowBox>
        </div>   
    )
}

export default BadgeGrid;

