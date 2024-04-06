import "../src/app/globals.css";
import DBLayout from "../src/components/DBLayout";  
import Image from "next/image";
import BadgeGrid from "../src/components/BadgeGrid";

const Badge = () => 
{
    return (
        <DBLayout>
            <div className="text-center my-16">
                <h1 className="my-2 font-concert_one text-2xl text-slate-600">Achievement Badge Gallery</h1>
                <h2 className="font-concert_one text-xl text-slate-600">Pass each level to reveal the hidden badge.</h2>
                <BadgeGrid />
            </div>
        </DBLayout>
    );
};

export default Badge;