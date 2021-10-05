import React from "react";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";

import "./login.scss";

const LoginPage = () => (
  <div className="login">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;
