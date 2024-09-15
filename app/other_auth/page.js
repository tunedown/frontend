"use client";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
export default function OtherAuth() {
  return (
    <main className="w-screen h-screen bg-primary font-poppins flex items-center flex-col">
      <Navbar />
      <div className="w-5/6 h-[450px] flex flex-row items-center justify-center p-12 gap-16">
        <AuthModal spotify={true} />
        <AuthModal />
      </div>
    </main>
  );
}
