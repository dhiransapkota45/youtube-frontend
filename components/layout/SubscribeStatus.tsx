import React, { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

type Prop = {
  children: React.ReactNode;
};

const SubscribeStatus = ({ children }: Prop) => {
  const router = useRouter();
  const [userLoginStatus, setUserLoginStatus] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      setUserLoginStatus(true);
    }
  }, [router.pathname]);


  const { pathname } = useRouter();
  const routes = [
    "/subscriptions",
    "/history",
    "/likedvideos",
    "/dislikedvideos",
    "/yourvideos",
  ];
  return (
    <div>
      {routes.includes(pathname) ? (
        <div>
          {userLoginStatus ? (
            <div>{children}</div>
          ) : (
            <div>
              <div>You need to login to access your subscribed channels</div>
              <Link href="/login"> Login</Link>
            </div>
          )}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default SubscribeStatus;
