'use client'





import React from 'react'
import Header from '../src/app/components/Organisms/header'
import Sidenav from '../src/app/components/Organisms/Sidenav'
import Main from '../src/app/components/Organisms/Main'
import Styles from '../src/app/components/Styles/Styles.css'


import SignInForm from '../src/app/login/SignIn'
import { UserProvider } from '@/app/contexts/UserContext'


function index() {

  
  return (
  


<div className='login'>

<SignInForm/>

</div>
      
     
     

   
  )
}

export default index