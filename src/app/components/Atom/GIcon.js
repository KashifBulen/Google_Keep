import React from "react";
import Image from "next/image";

import styles from "./style.css";

function Icon() {
  return (
    <div>
      <Image
        src="/assets/g-keep.png"
        width={55}
        height={55}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Icon;
