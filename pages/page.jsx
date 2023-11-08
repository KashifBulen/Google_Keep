"use client";

import React from "react";
import Header from "../src/app/components/Organisms/header";
import Sidenav from "../src/app/components/Organisms/Sidenav";
import Main from "../src/app/components/Organisms/Main";
import Styles from "../pages/Styles.css";
import { UserProvider } from "@/app/contexts/UserContext";

function about() {
  return (
    <div>
      <UserProvider>
        <Header />
      </UserProvider>

      <Sidenav />
      <Main />
    </div>
  );
}

export default about;
