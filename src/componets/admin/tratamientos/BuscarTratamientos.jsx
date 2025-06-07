import React, { useState } from "react";

const BuscarTratamientos = () => {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  const buscar = async () => {
    try {
      const res = await fetch(`https://backend-cios.onrender.com/api/tratamientos/buscar?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResultados(data);
    } catch (err) {
      console.error("Error en la búsqueda", err);
    }
  };

  return (
    <div className="poppins-regular">
      <h3 className="poppins-semibold">Buscar tratamiento</h3>
      <input
        type="text"
        placeholder="Buscar por nombre o categoría"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>

      {resultados.length > 0 && (
        <ul>
          {resultados.map((t) => (
            <li key={t._id}>
              <strong>{t.nombre}</strong> – {t.categoria} – ${t.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BuscarTratamientos;
