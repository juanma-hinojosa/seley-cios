// src/pages/BlogDetailPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../componets/LoadingSpinner";
import HeaderTitleComponent from "../componets/HeaderTitleComponent";
import "../css/RDBlogPage.css"
import logo from "../images/logo-png.png";
// import LogoVioleta from "/img/logo-violeta.png";

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Helmet } from "react-helmet-async";


function BlogDetailPage() {
  const { id } = useParams(); // obtenemos solo el ID
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://backend-cios.onrender.com/api/blogs/publico/${id}`)
      // fetch(`http://localhost:5000/api/blogs/publico/${id}`)
      .then((res) => res.json())
      .then(setBlog)
      .catch(console.error);
  }, [id]);

  if (!blog) return <LoadingSpinner />;
  const onInit = () => {
    // console.log('lightGallery has been initialized');
  };
  return (
    <>
      <Helmet>
        <title>{blog.tema} | Odontología C.I.O.S Dental R&R</title>
        <meta name="description" content={blog.introduccion} />
      </Helmet>

      <section
        style={{
          // marginTop: '80px',
          backgroundImage: "linear-gradient(rgba(83, 82, 82, 0.8), rgba(83, 82, 82, 0.8)),url('/img/blog.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          data-aos="zoom-in-up"
          style={{ width: "200px" }}
          src={logo} alt="logo" />
      </section>

      <HeaderTitleComponent
        h2={blog.titulo}
        h3={blog.tema}
        p={blog.introduccion}
      />

      <main className="container poppins-regular">
        <article className="blog-detail">
          <section className="contenido-blog">
            <header>
              <p><strong>Autor:</strong> {blog.autor?.name || "Sin autor"}</p>
            </header>
            <hr />
            <br />
            {blog.parrafos?.map((parrafo, idx) => (
              <div key={idx} className="parrafo">
                {parrafo.texto && <p>{parrafo.texto}</p>}
                <div className="grid-imagenes">

                  {/* <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                  >
                    {parrafo.imagenes?.map((img, i) => (
                      <a
                        className="img"
                        key={i}
                        href={img.startsWith("http") ? img : `https://backend-cios.onrender.com/${img}`}>
                        <img
                          // data-aos="zoom-in-up"
                          // key={i}
                          src={img.startsWith("http") ? img : `https://backend-cios.onrender.com/${img}`}
                          alt={`Imagen ${i + 1}`}
                        />
                      </a>

                    ))}
                  </LightGallery> */}

                  {parrafo.imagenes?.map((img, i) => (
                    <img
                      data-aos="zoom-in-up"
                      key={i}
                      src={img.startsWith("http") ? img : `https://backend-cios.onrender.com/${img}`}
                      alt={`Imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </article>
      </main>
    </>

  );
}

export default BlogDetailPage;
