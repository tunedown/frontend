import { useState } from "react";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
const useIsPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return [isPlaying, setIsPlaying];
};

export default useIsPlaying;
