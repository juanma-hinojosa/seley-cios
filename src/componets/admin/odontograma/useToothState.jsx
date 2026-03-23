import { useState } from "react";
import { INITIAL_FACES, STATES } from "./tooth.constants";


export const useToothState = () => {
  const [faces, setFaces] = useState(INITIAL_FACES);

  const nextState = (face) => {
    setFaces((prev) => {
      const i = STATES.indexOf(prev[face]);
      const next = STATES[(i + 1) % STATES.length];
      return { ...prev, [face]: next };
    });
  };

  return { faces, nextState };
};