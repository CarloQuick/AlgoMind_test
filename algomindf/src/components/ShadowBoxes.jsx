// Reference: 
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const ShadowBoxes = () => {
    return (
        <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
            <div className="flex justify-center font-concert_one h-72 border-b-2 border-palette-lighter relative"></div>    
        </div>
    );
};

export default ShadowBoxes;