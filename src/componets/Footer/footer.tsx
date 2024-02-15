import React, { useState } from "react";
import Image from "next/image";
import divider from "../../../public/assets/other/divider.svg";
import axios from "axios";

const Footer = () => {
  const sendEmail = async ({ body }: { body: string }) => {
    try {
      const response = await axios.post(
        "/api/sendEmail",
        JSON.stringify({
          body: body,
        })
      );
    } catch (e) {
      console.error("Error sending email:", e);
    }
  };
  return (
    <>
      <div className="w-[100vw] bg-white text-white h-auto">
        <Image
          src={divider}
          alt="Divider"
          height={0}
          width={0}
          className="w-[100vw]"
        />
        <div className="flex flex-col"></div>
      </div>
      <button
        onClick={() => sendEmail({ body: "Hello from abhinavganeshan.in" })}
        className="h-[100px] w-[200px] bg-black/10 bottom-0"
      >
        Send Email
      </button>
    </>
  );
};

export default Footer;
