import CardComponent from "../componets/CardComponent";
import HeaderAsideComponent from "../componets/HeaderAsideComponent";
import HeaderTitleComponent from "../componets/HeaderTitleComponent";
import HeroComponent from "../componets/HeroComponent";

function HomePage() {
  const servicesClinics = [
    {
      id: 0,
      title: "Caries",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolor. Ipsa qui nostrum voluptatibus dolores!",
    },
    {
      id: 1,
      title: "Endodoncia",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolor. Ipsa qui nostrum voluptatibus dolores!",
    },
    {
      id: 2,
      title: "Ortodoncia",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolor. Ipsa qui nostrum voluptatibus dolores!",
    },
    {
      id: 3,
      title: "Blanqueamineto",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolor. Ipsa qui nostrum voluptatibus dolores!",
    },
    {
      id: 4,
      title: "Implantes",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolor. Ipsa qui nostrum voluptatibus dolores!",
    },
    {
      id: 5,
      title: "Extracciones",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolor. Ipsa qui nostrum voluptatibus dolores!",
    },
  ];
  const infoClinics = [
    {
      id: 0,
      title: "Medios de Pago",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur beatae fugiat!",
      icon: "fa-solid fa-piggy-bank",
    },
    {
      id: 1,
      title: "Horarios de Atencion",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur beatae fugiat!",
      icon: "fa-solid fa-clock",
    },
    {
      id: 2,
      title: "Obras Sociales",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur beatae fugiat!",
      icon: "fa-brands fa-cc-visa",
    },
    {
      id: 3,
      title: "Retomar Tratamientos",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur beatae fugiat!",
      icon: "fa-solid fa-user-doctor",
    },
  ];
  return (
    <>
      <HeroComponent
        h1="Seley C.I.O.S"
        h2="Checkea Tu Salud Dental Hoy"
        p="ESTAMOS PARA CUIDAR DE TU SONRISA, TU SOLO DEBES DISFRUTAR DE ESOS MOMENTOS.🦷"
      />

      {/* Servicios clinicos */}
      <section className="services-clinics-contain">
        <HeaderTitleComponent
          h2="la mejor calidad y servicio que podes obtener"
          h3="Servicios Clinicos"
          p="Para mantener tu salud bucal proveemos un rango amplio de tratamientos para nuestros pacientes"
        />

        <article>
          {servicesClinics.map((service) => (
            <div key={service.id}>
              <h1>
                <i className="fa-solid fa-tooth"></i> {service.title}
              </h1>
              <p>{service.p}</p>
            </div>
          ))}
        </article>
      </section>
      {/*FIN Servicios clinicos */}

      <section>
        {/* Aca adentro creas tu parte de CUIDEMOS LOS DIENTES */}

        <CardComponent />
        <h1>Esta parte la tengo que hacer yo</h1>
      </section>

      {/* NUESTRAS CLINICAS */}
      <section>
        <HeaderTitleComponent
          h2="disfruta de la experiencia en nuestras clinicas"
          h3="nuestras clinicas"
          p="Contamos con un agradable lugar y sala de espera con Television, Wi-Fi, Aire Acondicionado, Calefaccion y mas"
        />
        <article>
          {infoClinics.map((info) => (
            <figure key={info.id}>
              <div>
                <i className={info.icon}></i>
              </div>
              <h3>{info.title}</h3>
              <p>{info.p}</p>
            </figure>
          ))}
        </article>
      </section>
      {/* FIN DE NUESTRAS CLINICAS */}

      {/* CUIDEMOS LOS DIENTES */}
      <section className="cuidados-contain">
        <figcaption>
          <video
            // src='src/assets/images/about-vid.mp4'
            src={`src/videos/video-1.mp4`}
            loop
            muted
            autoPlay
          ></video>
        </figcaption>
        <HeaderAsideComponent
          h3="cuidemos los diente"
          h2="mira los videos de nuestros procedimientos"
          p="Te invitamos a ver brevemente como trabajamos y nos importamos por cada paciente segun su urgencia y necesidad de la mejor manera"
        />
      </section>
      {/* FIN DE CUIDEMOS LOS DIENTES */}

      {/* REVIEWS */}
      <section>
        <HeaderTitleComponent 
        h2='nuestra atencion en los ojos de los pacientes'
        h3='Comentarios'
        p='Opniones con sinceridad de los pacientes que pasan por nuestro consultorio'
        />
      </section>
      {/* FIN REVIEWS */}




      {/* Para crear el footer tenes que ir a la carpeta components y el archivo FooterComponent */}
    </>
  );
}

export default HomePage;
