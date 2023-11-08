import React from 'react'
import Image from 'next/image'

import { useState } from 'react';
import Styles from '../Styles/Styles.css'
 

 
function Card_icons({Icons}) {

  return (
    
    <div className='icons_bottom'>

 {Icons.map((image, index) => (
          <Image key={index} src={image} width={19} height={19} alt={`Icons`}  
          
          
          />
          
        ))} 

       
         
         
       
         
    </div>

    
     
    
    
  )
}

export default Card_icons
