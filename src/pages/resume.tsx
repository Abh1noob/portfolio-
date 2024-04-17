import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Resume = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/Resume.pdf");
  }, []);
  return (
    <div className="flex h-screen w-screen bg-[#080808] items-center justify-center text-white">
      Redirecting ...
    </div>
  );
};

export default Resume;
