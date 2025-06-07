
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
// import { es } from "react-multi-date-picker/locales";
import { toast } from "react-toastify";
// import { es } from "react-multi-date-picker/locales";


const CrearTurnosDisponibles = () => {
  const [dias, setDias] = useState([]); // array de fechas seleccionadas
  const [consultorio, setConsultorio] = useState("1");
  const [horarios, setHorarios] = useState("");

   const handleCrear = async () => {
    const token = localStorage.getItem('token');
    const horariosArray = horarios.split(",").map(h => h.trim());

    try {
      for (const fecha of dias) {
        const diaISO = fecha.toDate().toISOString().split("T")[0]; // Convierte la fecha a formato ISO

        const res = await fetch("https://backend-cios.onrender.com/api/turnos-disponibles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ dia: diaISO, consultorio, horarios: horariosArray })
        });

        const data = await res.json();
        // console.log(data);

        if (!res.ok) throw new Error(data.message || "Error al crear el turno");
      }

      // Mostrar mensaje de éxito si todos los turnos fueron creados correctamente
      toast.success("Turnos creados para los días seleccionados.");
    } catch (error) {
      console.error(error);
      // Mostrar mensaje de error si algo falla
      toast.error("Hubo un error al crear los turnos.");
    }
  };

  return (
    <div className="poppins-regular" >
      <h3>Crear Turnos Disponibles</h3>
      <section className='ui-form-container'>
        <div className="ui-form">
          <label>Seleccionar días:</label>
          <DatePicker
            className="ui-input"
            multiple
            value={dias}
            onChange={setDias}
            format="YYYY-MM-DD"
            // locale="es"

          />

          <label className="ui-label">Consultorio:</label>
          <select className="ui-select" value={consultorio} onChange={e => setConsultorio(e.target.value)}>
            <option className="ui-option" value="1">Consultorio 1</option>
            <option className="ui-option" value="2">Consultorio 2</option>
          </select>

          <label className="ui-label">Horarios (ej: 09:00, 10:00, 11:00):</label>
          <input
          className="ui-input"
            type="text"
            placeholder="Ej: 09:30, 10:00, 10:30"
            value={horarios}
            onChange={e => setHorarios(e.target.value)}
          />

          <button style={{padding: "5px 20px"}} onClick={handleCrear}>Crear</button>
        </div>
      </section>

    </div>
  );
};

export default CrearTurnosDisponibles;
