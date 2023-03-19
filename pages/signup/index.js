import Form from "../../components/form";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";


export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(true);
      }
    });
  }, []);

  if (!isLoading) {
    return (
      <div className="middle">
        <div
          className="rounded-lg mt-3 text-white bg-indigo-500 p-5 w-[90%] m-auto lg:w-[800px] md:w-[800px]"
          align="center"
        >
          <Skeleton variant="rectangular" width={"90%"} height={300} />
        </div>
      </div>
    );
  }

  return (
    <div className="middle">
      <Form />
    </div>
  );
}
