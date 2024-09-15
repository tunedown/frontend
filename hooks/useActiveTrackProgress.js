import { useState } from "react";
const useActiveTrackProgress = () => {
  const [trackProgress, setTrackProgress] = useState(0);

  return [trackProgress, setTrackProgress];
};

export default useActiveTrackProgress;
