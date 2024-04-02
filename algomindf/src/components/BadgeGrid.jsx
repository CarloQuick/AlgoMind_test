// Reference: https://github.com/btahir/next-shopify-starter/blob/main/components/ProductListings.js
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";


const BadgeGrid = () => {
    return (
        <div className="py-1 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            <ShadowBoxes>
                Stack
            </ShadowBoxes>
            <ShadowBoxes>Queue</ShadowBoxes>
            <ShadowBoxes>List</ShadowBoxes>
            {/* <ShadowBoxes>Map</ShadowBoxes>
            <ShadowBoxes>Tree</ShadowBoxes>
            <ShadowBoxes>Graph</ShadowBoxes> */}
        </div>   
    )
}

export default BadgeGrid;

function ShadowBoxes({ children }) {
    return (
        <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
            <div className="flex justify-center font-concert_one h-72 border-palette-lighter relative">
                <div className="text-lime-600 text-xl pt-4 px-4">
                {/* <div className="font-primary text-palette-primary text-xl pt-4 px-4"> */}
                    {children}
                </div>
            </div>    
        </div>
    )
}
