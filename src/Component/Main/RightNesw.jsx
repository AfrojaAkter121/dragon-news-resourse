import React, { useContext } from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "../../Layout/FindUs";
import Qzon from "../../Layout/Qzon";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";

const RightNesw = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-8">
      {user ? "" : <SocialLogin />}
      <FindUs></FindUs>
      <Qzon></Qzon>
    </div>
  );
};

export default RightNesw;
