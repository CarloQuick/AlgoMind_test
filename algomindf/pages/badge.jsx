import "../src/app/globals.css";
import DBLayout from "../src/components/DBLayout";
import Image from "next/image";

import BadgeLayout from "../src/components/BadgeLayout";
import BadgeGrid from "../src/components/BadgeGrid";

const Badge = () => 
{
    return (
        <DBLayout>
            <div className="text-center">
                <h1 className="my-16 font-concert_one text-2xl text-slate-600">Achievement Badge Gallery</h1>
                <BadgeGrid />
                {/* <BadgeLayout /> */}
            </div>
        </DBLayout>
    );
};

export default Badge;