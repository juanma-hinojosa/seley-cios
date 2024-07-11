// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  servicesClinics,
  reviewList,
  infoClinics,
  sliderBackground,
  sliderBackgroundMobile,
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

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import ButtonComponent from "../componets/ButtonComponent";
import VideoAutoPlay from "../videos/procedimientos.mp4";
import HeroMobile from "../componets/HeroMobileComponent";

function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Swiper
        id="carusel-desktop"
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
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

      <Swiper
        id="carusel-mobile"
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        navigation={false}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderBackgroundMobile.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroMobile
              h1={slide.h1}
              h2={slide.h2}
              p={slide.p}
              img={slide.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Servicios clinicos */}
      <section
        id="servicios"
        className="services-clinics-contain space-section"
      >
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

      <section className="space-section">
        <CuidemosComponent />
      </section>

      {/* NUESTRAS CLINICAS */}
      <section id="nosotros" className="clinics-container space-section">
        <HeaderTitleComponent
          h2="disfruta de la experiencia en nuestras clinicas"
          h3="nuestras clinicas"
          p="Contamos con un agradable lugar y sala de espera con Television, Wi-Fi, Aire Acondicionado, Calefaccion y mas"
        />
        <article className="clinics-card-container poppins-regular">
          {infoClinics.map((info) => (
            <figure data-aos="fade-up" key={info.id}>
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
      <section className="cuidados-contain space-section">
        <figcaption>
          <video src={VideoAutoPlay} loop muted autoPlay></video>
        </figcaption>
        <div>
          <HeaderAsideComponent
            h3="cuidemos los diente"
            h2="mira los videos de nuestros procedimientos"
            p="Te invitamos a ver brevemente como trabajamos y nos importamos por cada paciente segun su urgencia y necesidad de la mejor manera"
          />

          <div
            className="buttons-contain"
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ButtonComponent
              nameLink="Ver Reels"
              url="https://instagram.com/dental.cios.rr?igshid=MzNlNGNkZWQ4Mg=="
            />

            <ButtonComponent
              nameLink="Ver Tutoriales"
              url="https://www.youtube.com/"
            />
          </div>
        </div>
      </section>
      {/* FIN DE CUIDEMOS LOS DIENTES */}

      {/* REVIEWS */}
      <section id="reviews" className="space-section">
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
        <div className="center-button">
          <ButtonComponent
            nameLink="Ver Comentarios"
            url="https://maps.app.goo.gl/8uQLsRacdTEhom8r9"
          />
        </div>
      </section>
      {/* FIN REVIEWS */}

      <section id="contacto" className="location-container space-section">
        <div>
          <LocationMaps
            h3="contactanos"
            h2="Agendamos tu consulta"
            p0="Direccion: Beauchef 1612 planta baja, C1424 Cdad. Autónoma de Buenos Aires"
            p1="Telefono: 1132160533"
            p2="Horario en la semana: Lunes - Viernes 9hs- 19hs"
            p3="Sabado de 9hs-12-hs"
          />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7366108738292!2d-58.433484025144715!3d-34.636095759207336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb28ed0b10ad%3A0x16753264cd65baeb!2sOdontolog%C3%ADa%20Integral%20%22C.I.O.S%22!5e0!3m2!1ses-419!2sar!4v1720466203666!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <WhatsAppComponent />
    </>
  );
}

export default HomePage;
