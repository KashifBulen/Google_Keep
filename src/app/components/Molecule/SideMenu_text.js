import React from 'react';
import Sidenav_Props from '../Atom/sidenav_icon'; // Update the import path
import Style from '../Atom/style.css'
function Sidenav_icon() {
  const items = [
    {
      imageUrl: '/assets/lg.png',
      text: 'Notes',
    },
    {
      imageUrl: '/assets/nt.png',
      text: 'Reminders',
    },

    {
        imageUrl: '/assets/ed.png',
        text: 'Edit Labels',
      },

      {
        imageUrl: '/assets/ar.png',
        text: 'Archive',
      },

      {
        imageUrl: '/assets/dl.png',
        text: 'Trash',
      },
    // Add more items as needed
  ];

  return (
    <div >
      <Sidenav_Props items={items} />
   
    </div>
  );
}

export default Sidenav_icon;