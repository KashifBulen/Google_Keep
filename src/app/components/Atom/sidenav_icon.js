



import React from "react";
import Image from "next/image";
import Style from './style.css'

function Sidenav_Props({ items }) {
  return (
    <div className="sidenav_con">
      {items.map((item, index) => (
        <div className="left-icon" key={index}>
          <Image src={item.imageUrl} width={25} height={25} alt={`Image ${index + 1}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Sidenav_Props;


  