import "../src/app/globals.css";
import DBLayout from "../src/components/DBLayout";
import Image from "next/image";

// All images are from Flat Icons: https://www.flaticon.com/ 
import trophy1 from "../src/images/user_db/badge/trophy1.png";
import trophy2 from "../src/images/user_db/badge/trophy2.png";
import ribbon1 from "../src/images/user_db/badge/ribbon1.png";
import medal from "../src/images/user_db/badge/medal.png";
import thumbs_up from "../src/images/user_db/badge/thumbs_up.png";
import wreath from "../src/images/user_db/badge/wreath.png";
import ribbon2 from "../src/images/user_db/badge/ribbon2.png";

const Badge = () => 
{
    return (
        <DBLayout>
            <div className="text-center">
                <h1 className="my-16 font-concert_one text-2xl text-slate-600">Achievement Badge Gallery</h1>
                <div className="flex justify-center items-center flex-wrap">
                    <div className="flex flex-col items-center m-7">
                        <Image src={trophy1} width={65} height={65} layout="fixed"/>
                    </div>
                    <div className="flex flex-col items-center m-7">
                        <Image src={medal} width={65} height={65} layout="fixed"/>
                    </div>
                    <div className="flex flex-col items-center m-7">
                        <Image src={ribbon1} width={65} height={65} layout="fixed"/>
                    </div>
                    <div className="flex flex-col items-center m-7">
                        <Image src={wreath} width={65} height={65} layout="fixed"/>
                    </div>
                    <div className="flex flex-col items-center m-7">
                        <Image src={thumbs_up} width={65} height={65} layout="fixed"/>
                    </div>
                    <div className="flex flex-col items-center m-7">
                        <Image src={trophy2} width={65} height={65} layout="fixed"/>
                    </div>
                    <div className="flex flex-col items-center m-7">
                        <Image src={ribbon2} width={65} height={65} layout="fixed"/>
                    </div>
                </div>
            </div>
        </DBLayout>
    );
};

export default Badge;