import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UserInfo() {
  const { data: session } = useSession();
  const [userDetails, setUserDetails] = useState();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (userDetails) {
      return;
    }
    fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ user }) => setUserDetails(user || {}))
      .catch((err) => console.error(err));
  }, []);

  if (!session) {
    return <div>Loading...</div>;
  }

  const { user } = session;

  const handleSignOut = async () => {
    await signOut();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-end items-center">
      <div className="text-lg font-semibold">
        {/* Dropdown */}
        <div className="relative inline-block text-right">
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {userDetails ? userDetails.username : "Loading..."}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* User Info */}
              <div className="py-1">
                <div className="block text-center px-4 py-2 text-sm text-gray-700 border-t">
                  XP Points: {userDetails ? userDetails.xp || 0 : 0}
                </div>
                {/* Sign Out */}
                <button
                  onClick={handleSignOut}
                  className="block w-full text-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-900"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
