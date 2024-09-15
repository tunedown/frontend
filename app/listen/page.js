"use client";
import Navbar from "@/components/Navbar";
import MusicPlayer from "@/components/MusicPlayer";
import { FaLongArrowAltDown } from "react-icons/fa";
import Monitor from "@/components/Monitor";

export default function Listen() {
  return (
    <main className=" bg-primary font-poppins">
      <Navbar />
      <div className="w-screen h-screen flex items-start justify-center px-12">
        <div className="flex flex-col items-center justify-center text-xl font-light px-8 gap-8 text-center bg-white py-6 rounded">
          <div className="text-5xl font-semibold">How does this work?</div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className=" text-center ">
              The app takes a song from your most played spotify playlist.
            </div>
            <FaLongArrowAltDown size={28} />
            <div className=" text-center ">
              This song is analysed for its audio features like tempo, energy,
              instrumentalness, danceability etc.
            </div>
            <FaLongArrowAltDown size={28} />

            <div>
              Once we get these features, we detect what emotions does this song
              generate.
            </div>
            <FaLongArrowAltDown size={28} />

            <div>
              This emotion is then combined with your current emotion which we
              detect using our algorithm from your wearable device.
            </div>
            <FaLongArrowAltDown size={28} />

            <div>
              Finally both of these combined are used to perfectly cater music,
              unique to you.
            </div>
          </div>
        </div>
        <MusicPlayer />
      </div>
      <div className="w-screen h-screen flex flex-col  p-16 gap-12 items-center justify-center">
        <div className="text-5xl font-semibold text-center">
          Monitor your Stats live
        </div>
        <Monitor />
      </div>
    </main>
  );
}
