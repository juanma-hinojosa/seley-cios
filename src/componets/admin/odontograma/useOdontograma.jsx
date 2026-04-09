import { useEffect, useState } from "react";

const API = "https://backend-cios.onrender.com/api/odontograma";

export const useOdontograma = (pacienteId) => {
  const [odontograma, setOdontograma] = useState(null);
  const [original, setOriginal] = useState(null); // 👈 para cancelar
  const [editable, setEditable] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔄 cargar odontograma
  useEffect(() => {
    if (!pacienteId) return;

    setLoading(true);

    fetch(`${API}/paciente/${pacienteId}`)
      .then(res => res.json())
      .then(data => {
        setOdontograma(data);
        setOriginal(JSON.parse(JSON.stringify(data))); // copia profunda
      })
      .finally(() => setLoading(false));
  }, [pacienteId]);

  // ✏️ activar edición
  const activarEdicion = () => {
    setEditable(true);
  };

  // ❌ cancelar cambios
  const cancelar = () => {
    setOdontograma(JSON.parse(JSON.stringify(original)));
    setEditable(false);
  };

  // 🎯 actualizar SOLO local
  // const updateLocal = (numero, cara, estado) => {
  //   if (!editable) return;

  //   setOdontograma(prev => ({
  //     ...prev,
  //     dientes: prev.dientes.map(d =>
  //       d.numero === numero
  //         ? {
  //             ...d,
  //             caras: {
  //               ...d.caras,
  //               [cara]: {
  //                 ...d.caras[cara],
  //                 estado
  //               }
  //             }
  //           }
  //         : d
  //     )
  //   }));
  // };

  const updateLocal = (numero, campo, valor) => {
  if (!editable) return;

  setOdontograma((prev) => ({
    ...prev,
    dientes: prev.dientes.map((d) => {
      if (d.numero !== numero) return d;

      // Estado general de toda la pieza
      if (campo === "estadoGeneral") {
        return {
          ...d,
          estadoGeneral: valor
        };
      }

      // Estado de una cara
      return {
        ...d,
        caras: {
          ...d.caras,
          [campo]: {
            ...d.caras[campo],
            estado: valor
          }
        }
      };
    })
  }));
};

  // 💾 guardar TODO
  const guardar = async () => {
    if (!odontograma) return;

    setLoading(true);

    await fetch(`${API}/${odontograma._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dientes: odontograma.dientes })
    });

    // actualizar copia original
    setOriginal(JSON.parse(JSON.stringify(odontograma)));
    setEditable(false);
    setLoading(false);
  };

  return {
    odontograma,
    editable,
    loading,
    activarEdicion,
    cancelar,
    guardar,
    updateLocal
  };
};