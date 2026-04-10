// import { COLORS, STATES, TOOTH_MARKS } from "./tooth.constants";
// import { ToothFace } from "./ToothFace";
// import { ToothCenter } from "./ToothCenter";
// import { ToothMask } from "./ToothMask";
// import { ToothLines } from "./ToothLines";
// import { useState } from "react";

// const FACE_CONFIG = {
//   top: "2,2 38,2 20,20",
//   right: "38,2 38,38 20,20",
//   bottom: "2,38 38,38 20,20",
//   left: "2,2 2,38 20,20"
// };

// const getNext = (s) => {
//   const i = STATES.indexOf(s);
//   return STATES[(i + 1) % STATES.length];
// };

// const Tooth = ({ number, data, onChange, editable }) => {
//   // Seleccionar en lugar de clickear
//   const [selector, setSelector] = useState(null)

//   if (!data) return null;


//   const handleFace = (face, e) => {
//     if (!editable) return;

//     setSelector({
//       type: "face",
//       face,
//       x: e.clientX,
//       y: e.clientY
//     });
//   };

//   const handleMark = () => {
//     if (!editable) return;

//     setSelector(prev =>
//       prev?.type === "mark"
//         ? null
//         : {
//           type: "mark"
//         }
//     );
//   };


//   return (
//     <div
//       style={{
//         margin: 6,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         position: "relative"
//       }}
//     >
//       <svg width="40" height="40">
//         <ToothMask id={`m-${number}`} />

//         <g mask={`url(#m-${number})`}>
//           {Object.entries(FACE_CONFIG).map(([f, pts]) => (
//             <ToothFace
//               key={f}
//               points={pts}
//               color={COLORS[data.caras[f].estado]}
//               onClick={(e) => handleFace(f, e)}
//             />
//           ))}

//           <ToothLines />
//         </g>

//         <ToothCenter
//           color={COLORS[data.caras.center.estado]}
//           onClick={(e) => handleFace("center", e)}
//         />

//         {/* Marcación general */}
//         {data.estadoGeneral && (
//           <>
//             {data.estadoGeneral === "O" ? (
//               <circle
//                 cx="20"
//                 cy="20"
//                 r="11"
//                 fill="none"
//                 stroke="black"
//                 strokeWidth="2"
//                 pointerEvents="none"
//               />
//             ) : (
//               <text
//                 x="20"
//                 y="24"
//                 textAnchor="middle"
//                 fontSize={data.estadoGeneral === "TC" ? "9" : "16"}
//                 fontWeight="bold"
//                 fill="black"
//                 pointerEvents="none"
//               >
//                 {data.estadoGeneral}
//               </text>
//             )}
//           </>
//         )}
//       </svg>

//       {/* selector de colores de caras */}
//       {selector?.type === "face" && (
//         <div
//           style={{
//             position: "fixed",
//             top: selector.y,
//             left: selector.x,
//             background: "#fff",
//             border: "1px solid #ccc",
//             padding: 6,
//             display: "flex",
//             gap: 6,
//             zIndex: 999,
//             borderRadius: 6,
//             boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
//           }}
//         >
//           {STATES.map((state) => (
//             <div
//               key={state}
//               onClick={() => {
//                 onChange(String(number), selector.face, state);
//                 setSelector(null);
//               }}
//               style={{
//                 width: 20,
//                 height: 20,
//                 backgroundColor: COLORS[state],
//                 border: "1px solid black",
//                 cursor: "pointer"
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* botón debajo del diente */}
//       {editable && (
//         <div style={{ position: "relative", marginTop: 4 }}>
//           <button
//             type="button"
//             onClick={handleMark}
//             style={{
//               fontSize: 10,
//               padding: "2px 6px",
//               border: "1px solid #999",
//               borderRadius: 4,
//               background: "#fff",
//               cursor: "pointer"
//             }}
//           >
//             Estado
//           </button>

//           {selector?.type === "mark" && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "110%",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 background: "#fff",
//                 border: "1px solid #ccc",
//                 borderRadius: 6,
//                 padding: 6,
//                 display: "flex",
//                 gap: 4,
//                 zIndex: 999,
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
//               }}
//             >
//               {TOOTH_MARKS.map((mark) => (
//                 <button
//                   key={mark.value}
//                   onClick={() => {
//                     onChange(
//                       String(number),
//                       "estadoGeneral",
//                       mark.value
//                     );
//                     setSelector(null);
//                   }}
//                   style={{
//                     minWidth: 30,
//                     height: 28,
//                     border: "1px solid #aaa",
//                     borderRadius: 4,
//                     background:
//                       data.estadoGeneral === mark.value
//                         ? "#1D3557"
//                         : "#fff",
//                     color:
//                       data.estadoGeneral === mark.value
//                         ? "#fff"
//                         : "#000",
//                     cursor: "pointer",
//                     fontSize: 12,
//                     fontWeight: "bold"
//                   }}
//                 >
//                   {mark.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       <div style={{ marginTop: 4 }}>{number}</div>
//     </div>
//   );
// };

// export default Tooth;


// Tooth.jsx

import {
  COLORS,
  STATES,
  TOOTH_MARKS,
  GENERAL_STATE_COLORS
} from "./tooth.constants";
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

const Tooth = ({ number, data, onChange, editable }) => {
  const [selector, setSelector] = useState(null);

  if (!data) return null;

  const handleFace = (face, e) => {
    if (!editable) return;

    setSelector({
      type: "face",
      face,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMark = () => {
    if (!editable) return;

    setSelector((prev) =>
      prev?.type === "mark"
        ? null
        : {
            type: "mark"
          }
    );
  };

  return (
    <div
      style={{
        margin: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}
    >
      <svg width="40" height="40">
        <ToothMask id={`m-${number}`} />

        <g mask={`url(#m-${number})`}>
          {Object.entries(FACE_CONFIG).map(([f, pts]) => (
            <ToothFace
              key={f}
              points={pts}
              color={COLORS[data.caras[f].estado]}
              onClick={(e) => handleFace(f, e)}
            />
          ))}

          <ToothLines />
        </g>

        <ToothCenter
          color={COLORS[data.caras.center.estado]}
          onClick={(e) => handleFace("center", e)}
        />

        {/* Marcación general */}
        {data.estadoGeneral && (
          <>
            {data.estadoGeneral === "O" ? (
              <circle
                cx="20"
                cy="20"
                r="11"
                fill="none"
                stroke={data.estadoGeneralColor || "#000"}
                strokeWidth="2"
                pointerEvents="none"
              />
            ) : (
              <text
                x="20"
                y="24"
                textAnchor="middle"
                fontSize={data.estadoGeneral === "TC" ? "9" : "16"}
                fontWeight="bold"
                fill={data.estadoGeneralColor || "#000"}
                pointerEvents="none"
              >
                {data.estadoGeneral}
              </text>
            )}
          </>
        )}
      </svg>

      {/* selector de colores de caras */}
      {selector?.type === "face" && (
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
            zIndex: 999,
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
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

      {/* botón debajo del diente */}
      {editable && (
        <div style={{ position: "relative", marginTop: 4 }}>
          <button
            type="button"
            onClick={handleMark}
            style={{
              fontSize: 10,
              padding: "2px 6px",
              border: "1px solid #999",
              borderRadius: 4,
              background: "#fff",
              cursor: "pointer"
            }}
          >
            Estado
          </button>

          {selector?.type === "mark" && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: 6,
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                zIndex: 999,
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
              }}
            >
              {TOOTH_MARKS.map((mark) => (
                <div
                  key={mark.value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                  }}
                >
                  <button
                    onClick={() => {
                      onChange(
                        String(number),
                        "estadoGeneral",
                        mark.value,
                        { color: "" }
                      );
                      setSelector(null);
                    }}
                    style={{
                      minWidth: 32,
                      height: 28,
                      border: "1px solid #aaa",
                      borderRadius: 4,
                      background: "#fff",
                      cursor: "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    {mark.label}
                  </button>

                  {mark.value !== "" && (
                    <>
                      <button
                        onClick={() => {
                          onChange(
                            String(number),
                            "estadoGeneral",
                            mark.value,
                            { color: GENERAL_STATE_COLORS.realizado }
                          );
                          setSelector(null);
                        }}
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          border: "1px solid #999",
                          background: GENERAL_STATE_COLORS.realizado,
                          cursor: "pointer"
                        }}
                        title="Tratamiento realizado"
                      />

                      <button
                        onClick={() => {
                          onChange(
                            String(number),
                            "estadoGeneral",
                            mark.value,
                            { color: GENERAL_STATE_COLORS.pendiente }
                          );
                          setSelector(null);
                        }}
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          border: "1px solid #999",
                          background: GENERAL_STATE_COLORS.pendiente,
                          cursor: "pointer"
                        }}
                        title="Tratamiento a realizar"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: 4 }}>{number}</div>
    </div>
  );
};

export default Tooth;