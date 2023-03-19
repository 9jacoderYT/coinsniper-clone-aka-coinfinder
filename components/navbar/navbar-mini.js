import { getSession, signOut } from "next-auth/client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavbarMini() {
  const [session, setSession] = useState();

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
    });
  }, []);

  function logoutHandler() {
    signOut();
  }

  return (
    <div className="bg-darkone">
      <div className="middle">
        <div className=" flex">
          <div
            className="text-sm flex-1 flex-grow items-center "
            style={{ color: "#758199" }}
          >
            <span className="mx-1">Projects Listed: </span>
            <span style={{ color: "#00AA72" }}>41,815</span>

            <span className="mx-1">Promoted Projects: </span>
            <span style={{ color: "#00AA72" }}>1,815</span>

            <span className="mx-1">Total Votes: </span>
            <span style={{ color: "#00AA72" }}>2,341,815</span>
          </div>

          <div className="flex-none gap-2">
            {session && (
              <div>
                <span style={{ color: "#758199" }} className="mr-3">
                  {session.user.email}
                </span>
                <span
                  className="hover:underline hover:cursor-pointer"
                  style={{ color: "#00AA72", fontSize: "13px" }}
                  onClick={logoutHandler}
                >
                  logout
                </span>
              </div>
            )}

            {!session && (
              <Link
                href="/signup"
                className="mr-3 hover:underline hover:cursor-pointer"
                style={{ color: "#00AA72", fontSize: "13px" }}
              >
                Register/Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
