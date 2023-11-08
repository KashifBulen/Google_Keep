import React from 'react'
import Image from 'next/image'
//  import S_icon from '../../../../public/assets/Srh_icon.png'
import style from './style.css'
import Styles from '../Styles/Styles.css'
function Search_button() {
  return (
    
      <div className="search-container">
        <div className="search-icon">
            <Image className='Srh-icon'
                src='/assets/srh_icon.png'
                width={20}
                height={20}
                alt="Search icon"
            
            />
        </div>
        <input type="text" placeholder="Search"/>
    </div>
   
    
  )
}

export default Search_button