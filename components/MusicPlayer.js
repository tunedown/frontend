"use client";
import useActiveTrackProgress from "@/hooks/useActiveTrackProgress";
import useIsPlaying from "@/hooks/useIsPlaying";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { useState } from "react";
import useActiveTrack from "@/hooks/useActiveTrack";
import { useEffect } from "react";
import mockSongs from "@/app/mockSongs";
import { songNames } from "@/app/mockSongs";
const Sound = require("react-sound").default;

const formatDuration = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const paddedSeconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${paddedSeconds}`;
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useIsPlaying();
  const [trackProgress, setTrackProgress] = useActiveTrackProgress();
  const [trackDuration, setTrackDuration] = useState("0:00");
  const [trackPosition, setTrackPosition] = useState("0:00");
  const { activeTrack, setActiveTrack } = useActiveTrack();
  const [isLoading, setIsLoading] = useState(false);
  const [isNextSongFetched, setIsNextSongFetched] = useState(false);
  const [bounce, setBounce] = useState(true);
  const [index, setIndex] = useState(
    Math.floor(Math.random() * mockSongs.length)
  );
  const [imageId, setImageId] = useState(Math.floor(Math.random() * 100));
  const [songNameIndex, setSongNameIndex] = useState(
    Math.floor(Math.random() * 20)
  );

  useEffect(() => {
    if (!activeTrack?.id) {
      selectNewTrack();
      setTimeout(() => {
        console.log("Playing now!");
      }, 6000);
      pause();
    }
  }, [activeTrack, Sound]);

  useEffect(() => {
    setTimeout(() => {
      setBounce(false);
    }, 5000);
  }, []);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  const handleSongLoading = ({ duration }) => {
    const formattedDuration = formatDuration(duration);
    setTrackDuration(formattedDuration);
    setIsNextSongFetched(false);
  };

  const handleSongPlaying = ({ position, duration }) => {
    const trackProgress = position / duration;
    const formattedPosition = formatDuration(position);
    setTrackPosition(formattedPosition);
    setTrackProgress(trackProgress);
  };

  const handleSongFinishedPlaying = async () => {
    console.log("Fetching next song...");
    selectNewTrack();
    return;
    setIsLoading(true);
    const emotion = "happy";
    const previousSongId = activeTrack.id;

    try {
      const url = new URL("https://fify-tips-suffer.loca.lt/get_next_song");
      url.searchParams.append("emotion", emotion);
      url.searchParams.append("previousSongId", previousSongId);

      const response = await fetch(url, {
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const { task_id } = await response.json();
      checkSongStatus(task_id);
    } catch (error) {
      selectNewRandomTrack();
    } finally {
      setIsLoading(false);
    }
  };
  const selectNewTrack = () => {
    setIndex((oldIndex) => oldIndex + (1 % mockSongs.length));
    const newTrack = mockSongs[index];
    setActiveTrack(newTrack);
    play();
  };

  const checkSongStatus = async (task_id) => {
    try {
      const url = new URL(
        "https://fifty-tips-suffer.loca.lt/check_song_status"
      );
      url.searchParams.append("task_id", task_id);

      const response = await fetch(url, {
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (data.audio_url) {
        setActiveTrack({ ...activeTrack, url: data.audio_url });
        play();
      } else {
        setTimeout(() => checkSongStatus(task_id), 6000);
      }
    } catch (error) {
      console.error("Failed to check song status: ", error);
    }
  };

  return (
    <div className="flex gap-2 justify-center flex-col items-center  w-screen py-8 pt-10">
      {isLoading && <div>Loading next track...</div>}
      <div>
        <Image
          className="rounded-full"
          src={`https://picsum.photos/id/${imageId}/450`}
          width={300}
          height={300}
          alt="image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-3xl font-semibold pt-4">
          {songNames[songNameIndex]}
        </div>
        <div className="text-lg italic font-extralight">
          {activeTrack?.artist}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-3 text-sm pt-8 select-none">
        <div>{trackPosition}</div>
        <progress
          className="progress-bar w-[34rem] h-1.5 bg-gray-200"
          value={trackProgress}
        />
        <div>{trackDuration}</div>
      </div>
      <div className="pt-6">
        {isPlaying ? (
          <IoIosPause
            onClick={pause}
            className="w-14 h-14 pb-2 cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200"
          />
        ) : (
          <FaPlay
            onClick={play}
            className={`w-10 h-10 cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 ${
              bounce ? "animate-bounce transition-all duration-200" : ""
            }`}
          />
        )}
      </div>
      {activeTrack && (
        <Sound
          url={activeTrack?.url}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={handleSongFinishedPlaying}
        />
      )}
    </div>
  );
};

export default MusicPlayer;
