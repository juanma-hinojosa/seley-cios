// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import CardReviewComponent from "../componets/CardReviewComponent";
import CardServicesComponent from "../componets/CardServicesComponent";
import HeaderAsideComponent from "../componets/HeaderAsideComponent";
import HeaderTitleComponent from "../componets/HeaderTitleComponent";
import HeroComponent from "../componets/HeroComponent";
import WhatsAppComponent from "../componets/WhatsAppComponent";
import LocationMaps from "../componets/LocationMaps";

function HomePage() {
  const servicesClinics = [
    {
      id: 0,
      title: "Caries",
      p: "Procedimiento en el que la pieza dental es recuperada evitando asi un problema mayor para el paciente en el futuro",
      img: "services-1.jpg",
    },
    {
      id: 1,
      title: "Endodoncia",
      p: "Quitamos el dolor del nervio por medio de este procedimeinto evitando asi una extraccion de la pieza",
      img: "services-2.jpg",
    },
    {
      id: 2,
      title: "Ortodoncia",
      p: "Logramos obtener una sonrisa linda y asi el paciente despues del tratamiento esta listo para sonrreir",
      img: "services-3.jpg",
    },
    {
      id: 3,
      title: "Blanqueamineto",
      p: "Procedimeinto estetico que embellece la sonrisa del paciente",
      img: "services-4.jpg",
    },
    {
      id: 4,
      title: "Implantes",
      p: "El implante cumple la funcion de remplazar piezas faltantes y asi lograr subir la confianza y autoestima del paciente",
      img: "services-5.jpg",
    },
    {
      id: 5,
      title: "Extracciones",
      p: "Este procedimeinto es el ultimo recurso para casos de muelas de jucios y casos irrecuperables de piezas dentales fracturadas",
      img: "services-6.jpg",
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
  const reviewList = [
    {
      id: 0,
      name: "Aylen Galarza",
      p: "Excelente atención, un amor de profesionales y reinas de la confianza hacia los niños!!",
    },
    {
      id: 1,
      name: "Agostina FG",
      p: "Excelente atención de la dra. Seley. Impecable el consultorio. Turnos rápidos. Súper recomendable. Quiero agregar que también he sido atendida por la dra. Andrea, quien ha sido súper amorosa en su atención y me ha explicado con lujo de detalles todo lo que necesité saber. Además se ha tomado la molestia de consultar mi caso con una colega y luego comunicarse telefónicamente conmigo para darme todas las opciones a seguir, por lo cual estoy inmensamente agradecida!",
    },
    {
      id: 2,
      name: "Samanta Ortega",
      p: "Las instalaciones son muy cómodas y limpias, además esta muy bien equipado. Me atendí con la Dra. Claudia y mi experiencia fue muy muy buena, excelente profesional, muy cuidadosa y dedicada, es difícil encontrar odontólogos con ese nivel de profesionalismo y empatía.",
    },
    {
      id: 3,
      name: "Sofia Moreno",
      p: "Excelente atención, un amor de profesionales y reinas de la confianza hacia los niños!!",
    },
    {
      id: 4,
      name: "Ivanna Coronel",
      p: "Excelente atención, un amor de profesionales y reinas de la confianza hacia los niños!!",
    },
    {
      id: 5,
      name: "Marina Postare",
      p: "Excelente atención, un amor de profesionales y reinas de la confianza hacia los niños!!",
    },
  ];
  return (
    <>
      <Swiper
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroComponent
            h1="Seley C.I.O.S"
            h2="Checkea Tu Salud Dental Hoy"
            p="ESTAMOS PARA CUIDAR DE TU SONRISA, TU SOLO DEBES DISFRUTAR DE ESOS MOMENTOS.🦷"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroComponent
            h1="Seley C.I.O.S"
            h2="Checkea Tu Salud Dental MAÑANA"
            p="ESTAMOS PARA CUIDAR DE TU SONRISA, "
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroComponent
            h1="Seley C.I.O.S"
            h2="Checkea Tu Salud Dental ayer"
            p="TU SOLO DEBES DISFRUTAR DE ESOS MOMENTOS.🦷"
          />
        </SwiperSlide>
      </Swiper>

      {/* Servicios clinicos */}
      <section className="services-clinics-contain">
        <HeaderTitleComponent
          h2="la mejor calidad y servicio que podes obtener"
          h3="Servicios Clinicos"
          p="Para mantener tu salud bucal proveemos un rango amplio de tratamientos para nuestros pacientes"
        />

        <article className="services-cards-container">
          {servicesClinics.map((service) => (
            <CardServicesComponent
              h1={service.title}
              key={service.id}
              img={service.img}
              p={service.p}
            />
          ))}
        </article>
      </section>
      {/*FIN Servicios clinicos */}

      <section>
        {/* Aca adentro creas tu parte de CUIDEMOS LOS DIENTES */}

        <h1>Esta parte la tengo que hacer yo</h1>
      </section>

      {/* NUESTRAS CLINICAS */}
      <section className="clinics-container">
        <HeaderTitleComponent
          h2="disfruta de la experiencia en nuestras clinicas"
          h3="nuestras clinicas"
          p="Contamos con un agradable lugar y sala de espera con Television, Wi-Fi, Aire Acondicionado, Calefaccion y mas"
        />
        <article className="clinics-card-container poppins-regular">
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
            src={`src/videos/procedimientos.mp4`}
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
          h2="nuestra atencion en los ojos de los pacientes"
          h3="Comentarios"
          p="Opniones con sinceridad de los pacientes que pasan por nuestro consultorio"
        />

        <div className="reviews-container">
          {reviewList.map((review) => (
            <CardReviewComponent
              key={review.id}
              name={review.name}
              p={review.p}
            />
          ))}
        </div>
      </section>
      {/* FIN REVIEWS */}
      <LocationMaps 
        h3='contactanos'
        p0='Direccion: Av. Siempreviva 123'
        p1='Telefono: 1100000000'
        p2='Horario en la semana: Lunes - Viernes 9hs- 19hs'
        p3='Sabado de 9hs-12-hs'
      />
      <WhatsAppComponent />
      {/* Para crear el footer tenes que ir a la carpeta components y el archivo FooterComponent */}
    </>
  );
}

export default HomePage;
