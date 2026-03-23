// src/pages/BlogPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../componets/HeroComponent";
import HeroFlyer from "../componets/HeroFlyer";
import video from "/videos/video.mp4";
import axios from "axios";
import LoadingSpinner from "../componets/LoadingSpinner";
import HeaderTitleComponent from "../componets/HeaderTitleComponent";
import '../css/components/CardComponent.css';
import { Helmet } from "react-helmet-async";

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [flyer, setFlyer] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga



  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsRes = await fetch("https://backend-cios.onrender.com/api/blogs/publicos");
        const blogsData = await blogsRes.json();

        // ✅ Ordenar por creadoEn descendente (más reciente primero)
        blogsData.sort((a, b) => new Date(b.creadoEn) - new Date(a.creadoEn));
        setBlogs(blogsData);

        // ✅ Cargar y filtrar flyer activo
        const flyerRes = await axios.get("https://backend-cios.onrender.com/api/flyers");
        const now = new Date();
        const activeFlyers = flyerRes.data.filter(f => new Date(f.expirationDate) > now);
        if (activeFlyers.length > 0) {
          setFlyer(activeFlyers[0]);
        }
      } catch (err) {
        console.error("Error cargando datos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Blog | Odontología C.I.O.S Dental R&R</title>
        <meta name="description" content="Odontologia C.I.O.S Dental Parque Chacabuco. Dentista Parque Chacabuco. Noticias, Blogs, Novedades y Avances de casos clinicos." />
        <link rel="canonical" href="https://cios-consultorio.com/blog" />

      </Helmet>

      {flyer ? <HeroFlyer flyer={flyer} /> : <HeroSection video={video} />}

      <main>
        <HeaderTitleComponent
          h2="Explora nuestros artículos más recientes"
          h3="Noticias, Blogs y Anuncios"
          p="Por ese motivo en Consultorio C.I.O.S. R&R, nos ocupamos de informarter las novedades sobre noticias, avances medicos y anuncios sobre la odontologia."
        />

        <section
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            padding: "2rem"
          }}>
          {blogs.length === 0 ? (
            <p>No hay blogs disponibles.</p>
          ) : (
            blogs.map((blog) => {
              const blogUrl = `/blog/${blog._id}`;
              return (
                <article key={blog._id} className="dental-card poppins-light">

                  <img className="dental-card__image" src={blog.parrafos[0].imagenes[0]} alt={blog.tema} />
                  <header className="dental-card__content">
                    <h2 >
                      <Link className="dental-card__title poppins-regular" to={blogUrl}>{blog.titulo}</Link>
                    </h2>
                    <p><strong>Tema:</strong> {blog.tema}</p>
                    <p><strong>Autor:</strong> {blog.autor?.name || "Sin autor"}</p>
                    <p >{blog.introduccion}</p>
                    <Link to={blogUrl} className="dental-card__link">Leer más</Link>

                  </header>

                </article>
              );
            })
          )}
        </section>


      </main>
    </>
  );
}

export default BlogPage;
