import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut, getSession } from "next-auth/client";

export default function Navbar() {
  const [session, loading] = useSession();
  const [sessionData, setSessionData] = useState();

  useEffect(() => {
    getSession().then((session) => {
      setSessionData(session);
    });
  }, []);
  function logoutHandler() {
    signOut();
  }

  return (
    <div className="bg-darkone">
      <div className="middle">
        <div className="navbar flex">
          <div className="flex-1 flex-grow items-center">
            <input
              type="text"
              placeholder="Search Coins"
              className="input input-bordered w-full mx-5"
              style={{ backgroundColor: "#1e2635", color: "white" }}
            />
          </div>

          {/* <div className="flex-none gap-2">
          
          </div> */}
        </div>
      </div>
    </div>
  );
}
