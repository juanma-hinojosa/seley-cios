import { useState } from "react";
import logo from "../images/logo-png.png";

function NavbarComponent() {
  const [navbar, setNavbar] = useState(false);

  const navLinks = [
    { id: 0, path: "#home", name: "inicio" },
    { id: 1, path: "#servicios", name: "servicios" },
    { id: 2, path: "#nosotros", name: "nosotros" },
    { id: 3, path: "#reviews", name: "reseñas" },
    { id: 4, path: "#contacto", name: "contacto" },
  ];

  
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  };

  window.addEventListener("scroll", changeBackground);
 
  function openMenu() {
    const nav = document.querySelector("#nav-container");
    nav.classList.add("visible");
  }

  function closeMenu() {
    const nav = document.querySelector("#nav-container");
    nav.classList.remove("visible");
  }

  return (
    <header className={navbar ? 'header-container active poppins-regular' : 'header-container poppins-regular'}>
      <section>
        <img className="logo" src={logo} alt="logo seley odontologia cios" />
        <div onClick={openMenu} className="abrir-menu" id="abrir-menu">
          <i className="fa-solid fa-bars"></i>
        </div>
        <nav className="nav-container" id="nav-container">
          <div onClick={closeMenu} id="cerrar-menu" className="cerrar-menu">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a onClick={closeMenu} href={link.path}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default NavbarComponent;
