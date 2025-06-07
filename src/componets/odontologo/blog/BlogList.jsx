import React, { useEffect, useState } from "react";

const BlogList = ({ onEdit }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://backend-cios.onrender.com/api/blogs/publicos")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar este blog?")) return;
    await fetch(`https://backend-cios.onrender.com/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setBlogs(blogs.filter((b) => b._id !== id));
  };

  return (
    <div className="blog-list">
      <h3 className="poppins-light">Lista de Blogs</h3>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-card poppins-regular">
          <br />
          <h4>{blog.titulo}</h4>
          <p><strong>Tema:</strong> {blog.tema}</p>
          <p><strong>Introducción:</strong> {blog.introduccion}</p>
          <p><strong>Autor:</strong> {blog.autor?.name || "Sin autor"}</p>
          <p><strong>Aprobado:</strong> {blog.aprobado ? "Sí" : "No"}</p>

          <div>
            <h5>Contenido:</h5>
            {blog.parrafos && blog.parrafos.length > 0 ? (
              blog.parrafos.map((parrafo, idx) => (
                <div key={idx} style={{ marginBottom: "1em" }}>
                  <p>{parrafo.texto}</p>
                  {parrafo.imagenes && parrafo.imagenes.length > 0 && (
                    <div className="imagenes">
                      {parrafo.imagenes.map((img, i) => (
                        <img
                          key={i}
                          src={img.startsWith("http") ? img : `https://backend-cios.onrender.com/${img}`}
                          alt={`Imagen ${i + 1}`}
                          style={{ width: "100px", marginRight: "10px" }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Sin contenido</p>
            )}
          </div>

          <button style={{padding: "5px", marginRight:"10px"}} onClick={() => onEdit(blog._id)}>Editar</button>
          <button style={{padding: "5px", marginRight:"10px"}} onClick={() => handleDelete(blog._id)}>Eliminar</button>
          <br /><br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
