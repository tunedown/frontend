import { useState } from "react";
const useActiveTrack = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  return { activeTrack, setActiveTrack };
};

export default useActiveTrack;
