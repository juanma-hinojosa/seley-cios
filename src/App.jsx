import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./componets/NavbarComponent";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import LocationMaps from "./componets/LocationMaps"
import FooterComponent from "./componets/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <LocationMaps />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
