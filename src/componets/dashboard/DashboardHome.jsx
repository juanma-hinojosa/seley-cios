import React, { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel";
import OdontologoPanel from "./OdontologoPanel";
import RecepcionistaPanel from "./RecepcionistaPanel";
// import RecepcionistaPanel from "./RecepcionistaPanel";

const DashboardHome = () => {
  const [rol, setRol] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    // const userData = JSON.parse(localStorage.getItem("userData"));
    if (user?.role) setRol(user.role);
  }, []);

  if (!rol) return <p>Cargando...</p>;

  switch (rol) {
    case "admin":
      return <AdminPanel />;
    case "odontologo":
      return <OdontologoPanel />;
    case "recepcionista":
      return <RecepcionistaPanel />;
    default:
      return <p>Rol desconocido</p>;
  }
};

export default DashboardHome;
