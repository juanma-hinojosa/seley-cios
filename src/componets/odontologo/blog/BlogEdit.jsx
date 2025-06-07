import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogEdit = ({ blogId }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const cargarBlog = async () => {
      try {
        const res = await fetch(`https://backend-cios.onrender.com/api/blogs/${blogId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) {
          throw new Error("Blog no encontrado");
        }

        const data = await res.json();
        // Convertimos intro a campo plano para compatibilidad con formulario
        setBlog({ ...data, intro: data.introduccion });
      } catch (error) {
        console.error(error);
        toast.error("No se pudo cargar el blog");
      }
    };

    cargarBlog();
  }, [blogId]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleParrafoChange = (index, value) => {
    const nuevosParrafos = [...blog.parrafos];
    nuevosParrafos[index].texto = value;
    setBlog({ ...blog, parrafos: nuevosParrafos });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmado = window.confirm("¿Estás seguro de que deseas actualizar este blog?");
    if (!confirmado) return;

    const { tema, titulo, intro, parrafos } = blog;

    const res = await fetch(`https://backend-cios.onrender.com/api/blogs/${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        tema,
        titulo,
        introduccion: intro,
        parrafos,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Blog actualizado");
    } else {
      toast.error(data.message || "Error al actualizar");
    }
  };

  if (!blog) return <p>Cargando...</p>;

  return (
    <section className="ui-form-container">
      <form onSubmit={handleSubmit} className="ui-form poppins-regular">
        <h3>Editar Blog</h3>
        <input
          name="tema"
          value={blog.tema}
          onChange={handleChange}
          placeholder="Tema"
          className="ui-input"
        />
        <input
          name="titulo"
          value={blog.titulo}
          onChange={handleChange}
          placeholder="Título"
          className="ui-input"
        />
        <textarea
          name="intro"
          value={blog.intro}
          onChange={handleChange}
          placeholder="Introducción"
          className="ui-textarea"

        />

        <h4>Párrafos:</h4>
        {blog.parrafos.map((parrafo, index) => (
          <div key={index} className="parrafo-section">
            <textarea
              value={parrafo.texto}
              onChange={(e) => handleParrafoChange(index, e.target.value)}
              placeholder={`Texto del párrafo ${index + 1}`}
              className="ui-textarea"

            />
            {parrafo.imagenes && parrafo.imagenes.length > 0 && (
              <div className="imagenes-preview">
                {parrafo.imagenes.map((img, i) => (
                  <img
                    key={i}
                    src={img.startsWith("http") ? img : `http://localhost:5000/${img}`}
                    alt={`Parrafo ${index + 1} imagen ${i + 1}`}
                    style={{ width: 100 }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        <button type="submit">Actualizar</button>
      </form>
    </section>

  );
};

export default BlogEdit;
