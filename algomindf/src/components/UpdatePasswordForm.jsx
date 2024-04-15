"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

async function getUser() {
  const userRes = await fetch("/api/user");
  return userRes.json();
}
const UpdatePasswordForm = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState();
  const [userID, setUserID] = useState();

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser();
        // console.log("User Data: ", userData);
        setUserID((userID) => (userID = userData.user._id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3000/api/update-password/${userID}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newPassword }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update username");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed z-10 w-400 h-300 bg-pink shadow-md rounded-lg"
      style={{
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        width: "500px",
        height: "300px",
        background: "#f1f5f9",
        boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <span
        className="close"
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
          fontSize: "24px",
          lineHeight: "18px",
          border: "1px solid #333",
          padding: "1px",
        }}
      >
        &times;
      </span>
      <h1 className="pl-40 font-concert_one text-2xl text-slate-600">
        Change your password
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="pl-36 mb-5 mt-10 font-concert_one text-xl text-slate-600">
          Password:{" "}
          <input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="pl-56 mb-4 mt-10 font-concert_one text-xl text-slate-600">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
