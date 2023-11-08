// SignInForm.js
import React, { useState } from 'react';
import {auth} from './firebase'; /// Import your Firebase configuration
import Styles from '../components/Styles/Styles.css'; // 
import { signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { useRouter } from 'next/router';


// const auth = getAuth(firebase_app);
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      

      alert('Successfully Sign in...')
      router.push('page')
    //  router.push('Admin')
      
    } catch (error) {
      
      console.error(error.message);
    }
  };

  return (
    <div className='form-con'>
    <form className='mod-Content' onSubmit={handleSignIn}>
      <div className='container-form'>
        <h1>Sign In</h1>
        <p>Please fill in this form to sign in to your account.</p>
        <hr />

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

        <div className='clearfix'>
          
           <button type="submit" className='signInBtn'>Sign In</button>
           <p>Not already have account Sign Up first.</p>
           <button type="button" className='cancelBtn' onClick={()=>router.push('out')}>Sign Up</button>
        
        </div>
      </div>
    </form>
    </div>
  );
};

export default SignInForm;
