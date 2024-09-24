"use client";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
export default function OtherAuth() {
  return (
    <main className="w-screen h-screen bg-primary font-poppins flex items-center flex-col">
      <Navbar />
      <div className="w-5/6 h-[450px] flex flex-row items-center justify-center p-12 gap-16">
        <AuthModal spotify={true} />
        <AuthModal />
      </div>
      <form action="/listen">
        <input
          className="cursor-pointer bg-white px-6 py-2 text-xl font-poppins rounded-full hover:opacity-70 transition-all duration-200 hover:scale-105"
          type="submit"
          value="Skip for now"
        />
      </form>
    </main>
  );
}
