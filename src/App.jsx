import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./componets/NavbarComponent";
import HomePage from "./pages/home";
import FooterComponent from "./componets/FooterComponent";
import ErrorPage from "./pages/errorpage";
import AdminLogin from "./pages/LoginPage";
// import AdminDashboard from "./pages/admin/AdminDashboard";
import PrivateRoute from "./componets/PrivateRouteComponent";
import DashboardHome from "./componets/dashboard/DashboardHome";
import ServicesPages from "./pages/services";
import AboutPage from "./pages/about-us";
import ScrollToTop from "./componets/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/RDBlogPage";
import WhatsAppComponent from "./componets/WhatsAppComponent";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { HelmetProvider } from "react-helmet-async";
import Footerbanner from "./componets/footer-banner";


// Este componente envolverá la lógica con useLocation
function AppContent() {
  const location = useLocation();

  // Rutas donde no se debe mostrar el Navbar
  const hideNavbarRoutes = ["/admin/login", "/dashboard"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  useEffect(() => {
    AOS.init();
  }, []);

  const onInit = () => {
    // console.log('lightGallery has been initialized');
  };
  return (
    <>
      <ScrollToTop />
      {!shouldHideNavbar && <NavbarComponent />}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />

        <Route path="/blog/:id" element={<BlogDetailPage />} />

        {/* Login de administrador */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute allowedRoles={["admin", "odontologo", "recepcionista"]}>
              {/* <AdminDashboard /> */}
              <DashboardHome />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {!shouldHideNavbar && <WhatsAppComponent />}
      {!shouldHideNavbar && <FooterComponent />}
      {!shouldHideNavbar && <Footerbanner />}
      
    </>
  );
}

// Envolvemos AppContent con BrowserRouter aquí
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
