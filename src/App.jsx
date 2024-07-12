import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./componets/NavbarComponent";
import HomePage from "./pages/home";
import FooterComponent from "./componets/FooterComponent";
import ErrorPage from "./pages/errorpage";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
