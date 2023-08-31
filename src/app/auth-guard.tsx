import { useStorage } from "../../utils/usestorage";
import Home from "./page";



import React from "react";
import { PAGE_ROUTE_LOCATION, TRAILSLASH } from "../../utils/constants";
import { useRouter } from "next/navigation";


type AuthGuardProps = {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const { getItem } = useStorage();
  const jwtToken = getItem("jwtToken");
  if(jwtToken){
    // router.push(TRAILSLASH + PAGE_ROUTE_LOCATION.CUSTOMERS);
} else{
    // router.push('/')
  }

  return <>{children}</>;
};

export default AuthGuard;
