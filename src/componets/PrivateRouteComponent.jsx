// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Si no hay token o no es admin, redirige
//   if (!token || user?.role !== "admin") {
//     return <Navigate to="/admin/login" />;
//   }

//   return children;
// };

// export default PrivateRoute;
import { Navigate } from "react-router-dom"; 

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
// console.log("PrivateRoute - User:", user);

  if (!token || !allowedRoles.includes(user?.role)) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default PrivateRoute;
