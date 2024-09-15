import { useState } from "react";
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
const useActiveTrack = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  return { activeTrack, setActiveTrack };
};

export default useActiveTrack;
