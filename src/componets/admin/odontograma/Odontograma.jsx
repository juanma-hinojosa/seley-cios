// import { useState } from "react";
// // import PatientSearch from "./PatientSearch";
// import OdontogramaManager from "./OdontogramaManager";
// import PatientSearch from "./PacienteSearch";

// export default function Odontograma() {
//   const [paciente, setPaciente] = useState(null);

//   const COLOR_INFO = [
//     {
//       categoria: "Principales",
//       items: [
//         {
//           nombre: "Celeste",
//           descripcion: "Tratamientos realizados y en buen estado",
//           color: "#00aae4"
//         },
//         {
//           nombre: "Rojo",
//           descripcion: "Caries, lesiones o tratamientos pendientes",
//           color: "#E63946"
//         }
//       ]
//     },
//     {
//       categoria: "Complementarios",
//       items: [
//         {
//           nombre: "Verde",
//           descripcion: "Tratamientos temporales",
//           color: "#008000"
//         },
//         {
//           nombre: "Negro",
//           descripcion: "Ausencias naturales de piezas",
//           color: "#000"
//         },
//         {
//           nombre: "Amarillo",
//           descripcion: "Sellantes de fosas y fisuras",
//           color: "#FFFF00"
//         },
//         {
//           nombre: "Naranja",
//           descripcion: "Hallazgos particulares o materiales específicos",
//           color: "#FFA500"
//         }
//       ]
//     }
//   ];

//   const MARK_INFO = [
//     {
//       inicial: "TC",
//       descripcion: "Tratamiento de conducto"
//     },
//     {
//       inicial: "O",
//       descripcion: "Corona"
//     },
//     {
//       inicial: "P",
//       descripcion: "Pivot / Perno"
//     },
//     {
//       inicial: "I",
//       descripcion: "Incrustación"
//     },
//     {
//       inicial: "=",
//       descripcion: "Extracción"
//     },
//     {
//       inicial: "X",
//       descripcion: "Pieza Ausente"
//     }
//   ];

//   return (
//     <div className="poppins-regular" >
//       {!paciente && <PatientSearch onSelect={setPaciente} />}

//       {paciente && (
//         <>
//           <h2>{paciente.nombre} {paciente.apellido}</h2>
//           <OdontogramaManager pacienteId={paciente._id} />
//         </>
//       )}


//       {COLOR_INFO.map((grupo) => (
//         <div key={grupo.categoria}>
//           <h4 style={{ margin: '20px 0 10px 0' }} >{grupo.categoria}</h4>

//           {grupo.items.map((item) => (
//             <div key={item.nombre} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <div
//                 style={{
//                   width: 16,
//                   height: 16,
//                   backgroundColor: item.color,
//                   border: "1px solid #000"
//                 }}
//               />
//               <strong>{item.nombre}:</strong> {item.descripcion}
//             </div>
//           ))}
//         </div>
//       ))}

//       <div style={{ marginTop: 30 }}>
//         <h4 style={{ margin: "20px 0 10px 0" }}>
//           Referencias de pieza completa
//         </h4>

//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: 12
//           }}
//         >
//           {MARK_INFO.map((item) => (
//             <div
//               key={item.inicial}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 padding: "8px 12px",
//                 border: "1px solid #ddd",
//                 borderRadius: 8,
//                 background: "#fafafa"
//               }}
//             >
//               <div
//                 style={{
//                   width: 34,
//                   height: 34,
//                   border: "1px solid #000",
//                   borderRadius: item.inicial === "O" ? "50%" : 4,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontWeight: "bold",
//                   fontSize: item.inicial === "TC" ? 11 : 16,
//                   background: "#fff"
//                 }}
//               >
//                 {item.inicial !== "O" ? item.inicial : ""}
//               </div>

//               <div>
//                 <strong>{item.inicial}</strong>: {item.descripcion}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import OdontogramaManager from "./OdontogramaManager";
import PatientSearch from "./PacienteSearch";

export default function Odontograma() {
  const [paciente, setPaciente] = useState(null);

  const COLOR_INFO = [
    {
      categoria: "Principales",
      items: [
        {
          nombre: "Celeste",
          descripcion: "Tratamientos realizados y en buen estado",
          color: "#00aae4"
        },
        {
          nombre: "Rojo",
          descripcion: "Caries, lesiones o tratamientos pendientes",
          color: "#E63946"
        }
      ]
    },
    {
      categoria: "Complementarios",
      items: [
        {
          nombre: "Verde",
          descripcion: "Tratamientos temporales",
          color: "#008000"
        },
        {
          nombre: "Negro",
          descripcion: "Ausencias naturales de piezas",
          color: "#000"
        },
        {
          nombre: "Amarillo",
          descripcion: "Sellantes de fosas y fisuras",
          color: "#FFFF00"
        },
        {
          nombre: "Naranja",
          descripcion: "Hallazgos particulares o materiales específicos",
          color: "#FFA500"
        }
      ]
    }
  ];

  const MARK_INFO = [
    {
      inicial: "TC",
      descripcion: "Tratamiento de conducto"
    },
    {
      inicial: "O",
      descripcion: "Corona"
    },
    {
      inicial: "P",
      descripcion: "Pivot / Perno"
    },
    {
      inicial: "I",
      descripcion: "Incrustación"
    },
    {
      inicial: "=",
      descripcion: "Extracción"
    },
    {
      inicial: "X",
      descripcion: "Pieza ausente"
    }
  ];

  return (
    <div className="poppins-regular">
      {!paciente && <PatientSearch onSelect={setPaciente} />}

      {paciente && (
        <>
          <h2>
            {paciente.nombre} {paciente.apellido}
          </h2>
          <OdontogramaManager pacienteId={paciente._id} />
        </>
      )}

      {COLOR_INFO.map((grupo) => (
        <div key={grupo.categoria}>
          <h4 style={{ margin: "20px 0 10px 0" }}>{grupo.categoria}</h4>

          {grupo.items.map((item) => (
            <div
              key={item.nombre}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: item.color,
                  border: "1px solid #000"
                }}
              />
              <strong>{item.nombre}:</strong> {item.descripcion}
            </div>
          ))}
        </div>
      ))}

      <div style={{ marginTop: 30 }}>
        <h4 style={{ margin: "20px 0 10px 0" }}>
          Referencias de pieza completa
        </h4>

        <p style={{ marginBottom: 12, color: "#666", fontSize: 14 }}>
          Cada marca puede mostrarse en celeste (realizado) o rojo (a realizar).
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12
          }}
        >
          {MARK_INFO.map((item) => (
            <div
              key={item.inicial}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: 8,
                background: "#fafafa",
                minWidth: 220
              }}
            >
              {/* Ejemplo realizado */}
              <div
                style={{
                  width: 34,
                  height: 34,
                  border: "2px solid #00aae4",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: item.inicial === "TC" ? 11 : 16,
                  color: "#00aae4",
                  background: "#fff"
                }}
              >
                {item.inicial}
              </div>

              {/* Ejemplo pendiente */}
              <div
                style={{
                  width: 34,
                  height: 34,
                  border: "2px solid #E63946",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: item.inicial === "TC" ? 11 : 16,
                  color: "#E63946",
                  background: "#fff"
                }}
              >
                {item.inicial}
              </div>

              <div>
                <strong>{item.inicial}</strong>: {item.descripcion}
                <div
                  style={{
                    fontSize: 12,
                    color: "#666",
                    marginTop: 2
                  }}
                >
                  Celeste = realizado · Rojo = a realizar
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}