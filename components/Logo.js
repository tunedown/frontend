import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="hover:opacity-70 transition-all duration-300 cursor-pointer"
      onClick={() => router.push("/")}
      src="/assets/logo/logo-transperent.png"
      height={200}
      width={300}
      alt="tunedown"
    />
  );
};

export default Logo;
