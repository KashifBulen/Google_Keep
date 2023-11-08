//child component...

// import React from 'react';
import Image from "next/image";
import Style from "../../components/Atom/style.css";
import Styles from "../Styles/Styles.css";

import G_Text from "./G_Text";
import Search_button from "./Search_button";

//firbase files
import React, { useState,  } from "react";

import { auth, db } from "../../login/firebase";

import { useRouter } from "next/router";
import { signOut } from "firebase/auth";


import { useUser } from "../../contexts/UserContext";
import Icon from './Icon'


function Props_comp({ leftImages, rightImages }) {
  //  const [userDisplayName, setUserName] = useState("");

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const user = useUser();

  const display = user.firstName + " " + user.lastName;
  const Role = user.role;
  const userEmail = user.email;
  console.log(display);

  const router = useRouter();



  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // User has been logged out successfully
        console.log("User logged out");
        // setUserName("");
        router.push("/"); // Redirect to the login page
      })
      .catch((error) => {
        // Handle any errors that occurred during logout
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="navbar">
      <div className="left-images">
        {leftImages.map((image, index) => (
          <Image
            key={`left-${index}`}
            src={image}
            width={22}
            height={22}
            alt={`Left Image ${index + 1}`}
          />
        ))}
        <div className="try">
          <Icon />
      
          <G_Text />
        </div>
      </div>

      <Search_button />

      <div className="right-images">
        {rightImages.map((image, index) => (
          <div key={`right-${index}`} className="image-container">
            <Image
              src={image}
              width={22}
              height={22}
              alt={`Right Image ${index + 1}`}
              className={index === rightImages.length - 1 ? "lastImage" : ""}
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            />
            {index === rightImages.length - 1 && isDropdownVisible && (
              <div className="dropdown">
                {/* Your dropdown content goes here */}
                <ul>
                  <li>
                    <h5>Role: {Role} </h5>
                  </li>
                  <li>
                    <p>{display}</p></li>
                  <li>
                    <p>{userEmail}</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}

        <button type="button" className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Props_comp;
