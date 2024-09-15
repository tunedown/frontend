import { useState } from "react";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
const useActiveTrackProgress = () => {
  const [trackProgress, setTrackProgress] = useState(0);

  return [trackProgress, setTrackProgress];
};

export default useActiveTrackProgress;
