"use client";
import React from "react";
import Styles from "../src/app/components/Styles/Styles.css";

import SignInForm from "../src/app/login/SignIn";

function index() {
  return (
    <div className="login">
      <SignInForm />
    </div>
  );
}

export default index;
