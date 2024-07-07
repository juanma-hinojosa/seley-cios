// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  servicesClinics,
  reviewList,
  infoClinics,
  sliderBackground,
} from "../js/services-list";
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
import CuidemosComponent from "../componets/SectionCuidemosComponent";

function HomePage() {
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
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={false}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderBackground.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroComponent
              h1={slide.h1}
              h2={slide.h2}
              p={slide.p}
              img={slide.img}
            />
          </SwiperSlide>
        ))}
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

        <CuidemosComponent />
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
        h3="contactanos"
        h2="Agendamos tu consulta"
        p0="Direccion: Av. Siempreviva 123"
        p1="Telefono: 1100000000"
        p2="Horario en la semana: Lunes - Viernes 9hs- 19hs"
        p3="Sabado de 9hs-12-hs"
      />
      <WhatsAppComponent />
      {/* Para crear el footer tenes que ir a la carpeta components y el archivo FooterComponent */}
    </>
  );
}

export default HomePage;
