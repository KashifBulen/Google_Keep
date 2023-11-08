// SignUpForm.js
import React, { useState } from 'react';
import {auth, db} from './firebase'; // Import your Firebase configuration
import Styles from '../components/Styles/Styles.css'; // Import your CSS module
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from 'next/router';


import {doc, setDoc } from "firebase/firestore";




const SignUpForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  //  const [profilePicture, setProfilePicture] = useState(null);


  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      if (password === passwordRepeat) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
    
      // Create a user document in Firestore
       // Initialize Firestore
      const userDocRef = doc(db, "users", user.uid); // "users" is the Firestore collection
     
      // Define the user data to store in Firestore
      const userData = {
        firstName,
        lastName,
        email,
        password,
        role: "user"
        // Add more user-specific data as needed
      };
     
      await setDoc(userDocRef, userData); // Create the user document
      console.log(userDocRef)
      console.log("User document created in Firestore");

        console.log(firstName, lastName);
        alert("success ")
        router.push('page');
      } else {
        
        console.error('Passwords do not match.');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

















  return (
    <div className='form-con'>
    <form className='mod-Content' onSubmit={handleSignUp}>
      <div className='container-form'>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        
        <hr />
        {/* <label htmlFor="profilePicture"><b>Profile Picture</b></label>
<input
  type="file"
  accept="image/*"
  name="profilePicture"
  onChange={(e) => setProfilePicture(e.target.files[0])}
/> */}
        <label htmlFor="fname"><b>First Name</b></label>
        <input
          type="text"
          placeholder="Enter your first name."
          name="fname"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lname"><b>Last Name</b></label>
        <input
          type="text"
          placeholder="Enter your last name."
          name="lname"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="psw-repeat"
          required
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />

       
        <div className='clearfix'>
        <button type="submit" className='signUpBtn'>Sign Up</button>
        <p>Already have account.</p>
          <button type="button" className='cancelBtn' onClick={()=>router.push('/')}>Sign In</button>
         
        </div>
      </div>
    </form>
    </div>
  );
};

export default SignUpForm;


























 
