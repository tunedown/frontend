import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
const AuthModal = ({ spotify = false }) => {
  const router = useRouter();
  return (
    <div className="bg-white items-center justify-center flex w-1/2 border-gray-700 border-opacity-10 border-2 rounded-xl h-full flex-col gap-4">
      {spotify && (
        <>
          <div className="text-4xl font-semibold">Get your loved songs!</div>
          <div className="flex flex-col items-center justify-center gap-3 py-6">
            <div className="text-2xl">Connect your Spotify Account</div>
            <div>
              <Image
                onClick={() =>
                  window.open(
                    "https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F",
                    "_blank"
                  )
                }
                className="p-6 mt-4 hover:scale-105 hover:opacity-75 transition-all duration-300 cursor-pointer"
                src="/assets/spotify.png"
                width={200}
                height={100}
                alt="spotify"
              />
            </div>
          </div>
        </>
      )}
      {!spotify && (
        <>
          <div className="pt-20 first-line:text-4xl font-semibold">
            Share your health data
          </div>
          <div className="flex flex-col items-center justify-center gap-0 py-6">
            <div className="text-2xl">Connect your Apple Health Account</div>
            <div>
              <Image
                onClick={() =>
                  window.open(
                    "https://secure6.store.apple.com/ca/shop/signIn?ssi=1AAABkfRMdZUg3lzvubplDaQRpqjE2enayblgBQUtxggSbGmJnaUuATUAAAA3aHR0cHM6Ly93d3cuYXBwbGUuY29tL2NhL3Nob3Avc29ycnkvaWxsZWdhbF9hcmd1bWVudHN8fAACAQT8nIMk8PjmUm2AYxiG4zxBJzw1Bo2BKDiCzlIaGP2n",
                    "_blank"
                  )
                }
                className="p-6 mb-8 hover:scale-105 hover:opacity-75 transition-all duration-300 cursor-pointer"
                src="/assets/apple.png"
                width={200}
                height={100}
                alt="spotify"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default AuthModal;
