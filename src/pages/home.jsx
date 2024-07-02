import CardComponent from "../componets/CardComponent";
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
        h2='la mejor calidad y servicio que podes obtener'
        h3='Servicios Clinicos'
        p='Para mantener tu salud bucal proveemos un rango amplio de tratamientos para nuestros pacientes'
        />

        <article>
          {servicesClinics.map((service) => (
            <div key={service.id}>
              <h1>
                <i className="fa-solid fa-tooth"></i>                {service.title}

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
        h2='disfruta de la experiencia en nuestras clinicas'
        h3='nuestras clinicas'
        p='Contamos con un agradable lugar y sala de espera con Television, Wi-Fi, Aire Acondicionado, Calefaccion y mas'
        />
      </section>
      {/* FIN DE NUESTRAS CLINICAS */}

      {/* Para crear el footer tenes que ir a la carpeta components y el archivo FooterComponent */}
    </>
  );
}

export default HomePage;
