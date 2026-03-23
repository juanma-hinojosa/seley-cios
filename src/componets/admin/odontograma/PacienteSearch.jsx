import { useState } from "react";

const API = "https://backend-cios.onrender.com/api";

export default function PatientSearch({ onSelect }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!search.trim()) return;

    const res = await fetch(`${API}/odontograma/buscar?q=${search}`);
    const data = await res.json();

    setResults(data);
  };

   return (
    <div
      style={{
        maxWidth: 500,
        margin: "20px auto",
        padding: 20,
        borderRadius: 12,
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      {/* 🔍 BUSCADOR */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 15
        }}
      >
        <input
          placeholder="Buscar por nombre, apellido o DNI"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #ccc",
            outline: "none",
            fontSize: 14
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            background: "#1D3557",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 500
          }}
        >
          Buscar
        </button>
      </div>

      {/* 📋 RESULTADOS */}
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
              borderRadius: 8,
              background: "#f9f9f9",
              border: "1px solid #eee"
            }}
          >
            <span style={{ fontSize: 14 }}>
              {p.nombre} {p.apellido} - {p.dni}
            </span>

            <button
              onClick={() => onSelect(p)}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "none",
                background: "#2a9d8f",
                color: "#fff",
                cursor: "pointer",
                fontSize: 12
              }}
            >
              Seleccionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 