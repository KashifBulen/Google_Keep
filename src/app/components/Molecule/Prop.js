//Parent componenet..



import React from 'react';
import Props_comp from '../Atom/HeadNavIcon';
import styles from '../Atom/style.css'
/**
 * 
 * @returns 
 */
function Keep_Icons() {
  const leftImages = [
    '/assets/bar1.png'
  
  //add more image url in future
  ];
  const rightImages = [
   
  '/assets/R_icon.png',
  '/assets/List.png',
  '/assets/Stt_icon.png',
  '/assets/apps.png',
  '/assets/a_circle.png',

  //add more image url in future
];

  return (
    <nav>
      <Props_comp leftImages={leftImages} rightImages={rightImages} />
      
    </nav>
  );
}

export default Keep_Icons;
