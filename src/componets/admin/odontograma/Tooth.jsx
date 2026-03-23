import { COLORS, STATES } from "./tooth.constants";
import { ToothFace } from "./ToothFace";
import { ToothCenter } from "./ToothCenter";
import { ToothMask } from "./ToothMask";
import { ToothLines } from "./ToothLines";
import { useState } from "react";

const FACE_CONFIG = {
  top: "2,2 38,2 20,20",
  right: "38,2 38,38 20,20",
  bottom: "2,38 38,38 20,20",
  left: "2,2 2,38 20,20"
};

const getNext = (s) => {
  const i = STATES.indexOf(s);
  return STATES[(i + 1) % STATES.length];
};

const Tooth = ({ number, data, onChange, editable }) => {
  // Seleccionar en lugar de clickear
  const [selector, setSelector] = useState(null)

  if (!data) return null;

  // const handle = (face) => {
  //   if (!editable) return;

  //   const next = getNext(data.caras[face].estado);
  //   onChange(String(number), face, next);
  // };

  const handle = (face, e) => {
    if (!editable) return;

    setSelector({
      face,
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div style={{ margin: 6 }}>
      <svg width="40" height="40">
        <ToothMask id={`m-${number}`} />

        <g mask={`url(#m-${number})`}>
          {Object.entries(FACE_CONFIG).map(([f, pts]) => (
            <ToothFace
              key={f}
              points={pts}
              color={COLORS[data.caras[f].estado]}
              // onClick={() => handle(f)}
              onClick={(e) => handle(f, e)}
            />
          ))}
          <ToothLines />
        </g>

        <ToothCenter
          color={COLORS[data.caras.center.estado]}
          // onClick={() => handle("center")}
          onClick={(e) => handle("center", e)}
        />
      </svg>
      {selector && (
        <div
          style={{
            position: "fixed",
            top: selector.y,
            left: selector.x,
            background: "#fff",
            border: "1px solid #ccc",
            padding: 6,
            display: "flex",
            gap: 6,
            zIndex: 999
          }}
        >
          {STATES.map((state) => (
            <div
              key={state}
              onClick={() => {
                onChange(String(number), selector.face, state);
                setSelector(null);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: COLORS[state],
                border: "1px solid black",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
      )}
      <div>{number}</div>


    </div>
  );
};

export default Tooth;