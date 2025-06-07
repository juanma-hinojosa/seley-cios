import React from "react";

const ListaTratamientos = ({ tratamientos, onEdit, onDelete }) => {
  return (
    <div>
      <h3 className="poppins-semibold">Lista de tratamientos</h3>
      {tratamientos.length === 0 ? (
        <p>No hay tratamientos registrados.</p>
      ) : (
         <div className="empleados poppins-regular">
          <div className="empleados__tabla-contenedor">
            <table className="empleados__tabla">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tratamientos.map((t) => (
                  <tr key={t._id}>
                    <td>{t.categoria}</td>
                    <td>{t.nombre}</td>
                    <td>${t.precio}</td>
                    <td>
                  <button onClick={() => onEdit(t)}>✏️</button>
                  {/* <button onClick={() => onDelete(t._id)}>🗑️</button> */}
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaTratamientos;
