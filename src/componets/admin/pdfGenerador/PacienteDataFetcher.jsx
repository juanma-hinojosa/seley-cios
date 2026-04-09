// PacienteDataFetcher.jsx
import { useState } from "react";

const API = "https://backend-cios.onrender.com/api";

export default function PacienteDataFetcher({ onDataReady }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const token = localStorage.getItem("token");

  const buscarPacientes = async () => {
    if (!search.trim()) return;

    try {
      setLoading(true);

      // usa el mismo endpoint que ya tenías para odontograma
      const res = await fetch(
        `${API}/odontograma/buscar?q=${encodeURIComponent(search)}`
      );

      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Error buscando pacientes", err);
    } finally {
      setLoading(false);
    }
  };

  const seleccionarPaciente = async (paciente) => {
    try {
      setLoading(true);
      setSelected(paciente);

      // Traer historia clínica
      const historiaPromise = fetch(
        `${API}/records/paciente/${paciente._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then((r) => r.json());

      // Traer odontograma
      const odontogramaPromise = fetch(
        `${API}/odontograma/paciente/${paciente._id}`
      ).then((r) => r.json());

      const [historia, odontograma] = await Promise.all([
        historiaPromise,
        odontogramaPromise
      ]);

      onDataReady({
        paciente,
        historia,
        odontograma
      });
    } catch (err) {
      console.error("Error cargando datos del paciente", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 650,
        margin: "20px auto",
        padding: 20,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 15
        }}
      >
        <input
          type="text"
          value={search}
          placeholder="Buscar por nombre, apellido, DNI o número"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") buscarPacientes();
          }}
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 14
          }}
        />

        <button
          onClick={buscarPacientes}
          disabled={loading}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            background: "#1D3557",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {results.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10
          }}
        >
          {results.map((p) => (
            <li
              key={p._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 12px",
                border: "1px solid #eee",
                borderRadius: 8,
                background:
                  selected?._id === p._id ? "#f0f4ff" : "#fafafa"
              }}
            >
              <div>
                <strong>
                  {p.nombre} {p.apellido}
                </strong>
                <div style={{ fontSize: 13, color: "#666" }}>
                  DNI: {p.dni}
                  {p.numeroPaciente
                    ? ` · Nº ${p.numeroPaciente}`
                    : ""}
                </div>
              </div>

              <button
                onClick={() => seleccionarPaciente(p)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "none",
                  background: "#2a9d8f",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600
                }}
              >
                Seleccionar
              </button>
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <div
          style={{
            marginTop: 15,
            padding: 10,
            borderRadius: 8,
            background: "#f7f7f7",
            fontSize: 14
          }}
        >
          Paciente seleccionado:{" "}
          <strong>
            {selected.nombre} {selected.apellido}
          </strong>
        </div>
      )}
    </div>
  );
}