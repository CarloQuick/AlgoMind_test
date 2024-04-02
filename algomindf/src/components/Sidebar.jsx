// This is part of the user dashboard
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo_text from "../images/logo_text.png";
import home_icon from "../images/user_db/home_icon.png";
import profile_icon from "../images/user_db/profile_icon.png";
import lesson_icon from "../images/user_db/lesson_icon.png";
import badge_icon from "../images/user_db/badge_icon.png";
import progress_icon from "../images/user_db/progress_icon.png";

const styleLink = 'flex items-center gap-2 font-concert_one text-primary-800 mb-4 text-xl text-slate-600 font-large hover:bg-indigo-200'

const Sidebar = () => {
  return (
    <div className="flex bg-indigo-300 w-52 p-3 flex-col h-screen gap-7">
      <div className="flex justify-center items-center">
        <Image src={logo_text} width={130} height={130} layout="fixed" />
      </div>
      <div className="flex flex-col gap-1"> 
        <Link href="/user_dashboard">
          <div className={styleLink}>
            <Image src={home_icon} alt="Home" width={25} height={25} layout="fixed" />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className={styleLink}>
            <Image src={profile_icon} alt="XP" width={25} height={25} layout="fixed" />
            <span>Profile</span>
          </div>
        </Link>
        <Link href="/lesson">
          <div className={styleLink}>
              <Image src={lesson_icon} alt="Lesson" width={18} height={18} layout="fixed" />
            <span className="ml-1">Lesson</span>
          </div>
        </Link>
        <Link href="/badge">
          <div className={styleLink}>
            <Image src={badge_icon} alt="Badge" width={22} height={22} layout="fixed" />
            <span>Badge</span>
          </div>
        </Link>
        <Link href="/progress">
          <div className={styleLink}>
            <Image src={progress_icon} alt="Progress" width={24} height={24} layout="fixed" />
            <span>Progress</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
