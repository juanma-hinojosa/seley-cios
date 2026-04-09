// OdontogramaPreview.jsx
import ToothRow from "../odontograma/ToothRow";
import { useOdontograma } from "../odontograma/useOdontograma";

const rows = [
  [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28],
  [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38],
  [55, 54, 53, 52, 51, 61, 62, 63, 64, 65],
  [85, 84, 83, 82, 81, 71, 72, 73, 74, 75]
];

export default function OdontogramaPreview({ pacienteId }) {
  const { odontograma, loading } = useOdontograma(pacienteId);

  if (loading) {
    return (
      <div
        style={{
          padding: 20,
          fontFamily: "Poppins, sans-serif"
        }}
      >
        Cargando odontograma...
      </div>
    );
  }

  if (!odontograma) return null;

  return (
    <section
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        width: "fit-content"
      }}
    >
      {rows.map((row, i) => (
        <ToothRow
          key={i}
          teeth={row}
          dientesData={odontograma.dientes}
          onChange={() => {}}
          editable={false}
        />
      ))}
    </section>
  );
}