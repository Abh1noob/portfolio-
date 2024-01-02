import React from "react";
import Image from "next/image";
import divider from "../../../public/assets/other/divider.svg";
const Footer = () => {
  return (
    <div className="w-[100vw]">
      <Image
        src={divider}
        alt="Divider"
        height={0}
        width={0}
        className="w-[100vw]"
      />
    </div>
  );
};

export default Footer;
