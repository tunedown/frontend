"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { VscTriangleRight } from "react-icons/vsc";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const handleOnClickSignedIn = () => {
    router.push("/other_auth");
  };

  return (
    <main className="w-screen h-screen bg-primary font-poppins">
      <Navbar />
      <Hero />
      <div className="flex flex-row items-center justify-center text-3xl font-medium mt-36 ml-[66rem] hover:opacity-70 cursor-pointer hover:scale-105 transition-all duration-200">
        <div>
          <span onClick={handleOnClickSignedIn}>Let&apos;s go!</span>
        </div>
        <VscTriangleRight size={28} />
      </div>
    </main>
  );
}
