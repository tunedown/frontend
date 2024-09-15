import { useState } from "react";

const useIsPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return [isPlaying, setIsPlaying];
};

export default useIsPlaying;
