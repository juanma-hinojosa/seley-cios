import ToothRow from "./ToothRow";
import { useOdontograma } from "./useOdontograma";

const rows = [
  [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28],
  [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38],
  [55, 54, 53, 52, 51, 61, 62, 63, 64, 65],
  [85, 84, 83, 82, 81, 71, 72, 73, 74, 75]
];

function OdontogramaManager({ pacienteId }) {
  const {
    odontograma,
    editable,
    loading,
    activarEdicion,
    cancelar,
    guardar,
    updateLocal
  } = useOdontograma(pacienteId);

  if (loading) return <p>Cargando...</p>;
  if (!odontograma) return null;


  return (
    <section className="max-width">
      <div>
        {/* 🔥 BOTONES */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 15,
            flexWrap: "wrap"
          }}
        >
          {!editable ? (
            <button
              onClick={activarEdicion}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                background: "#1D3557", // mismo azul
                color: "#fff",
                cursor: "pointer",
                fontWeight: 500,
                transition: "0.2s"
              }}
            >
              ✏️ Editar
            </button>
          ) : (
            <>
              <button
                onClick={guardar}
                style={{
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: "#2a9d8f", // verde éxito
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "0.2s"
                }}
              >
                💾 Guardar cambios
              </button>

              <button
                onClick={cancelar}
                style={{
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: "#E63946", // rojo consistente con caries
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "0.2s"
                }}
              >
                ❌ Cancelar
              </button>
            </>
          )}
        </div>

        {/* 🦷 ODONTOGRAMA */}
        {rows.map((row, i) => (
          <ToothRow
            key={i}
            teeth={row}
            dientesData={odontograma.dientes}
            onChange={updateLocal}
            editable={editable}
          />
        ))}
      </div>


      <hr />

    </section>
  );
}

export default OdontogramaManager;