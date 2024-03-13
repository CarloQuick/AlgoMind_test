"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckButton({ id, xp }) {
  const [newXp, setNewXp] = useState(xp);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newXp }),
      });
      if (res.ok) {
        router.refresh();
      } else {
        throw new Error("Could not put xp");
      }
    } catch (error) {
      console.log("Could not update xp!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewXp(e.target.value)}
        value={newXp}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Enter XP"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Submit XP Change
      </button>
    </form>
  );
}
