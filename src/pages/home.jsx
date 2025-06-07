import { servicesClinics } from "../js/services-list";

import CardServicesComponent from "../componets/CardServicesComponent";
import HeaderTitleComponent from "../componets/HeaderTitleComponent";
import HeroComponent from "../componets/HeroComponent";

import { useEffect, useState } from "react";
import diente from "/img/diente.png"
import ZoomOnScroll from "../componets/ZoomOnScroll";
import CardSection from "../componets/CardSection";
import consultorio from "/img/consultorio.webp"
import ReviewBannerComponent from "../componets/ReviewBannerComponent";
import DoctorProfile from "../componets/DoctorProfile";
import TechnologySection from "../componets/TechnologySection";
import GoogleMapEmbed from "../componets/GoogleMaps";
import ContactInfo from "../componets/ContactInfoComponent";
import FlyerPopup from "../componets/flyer/FlyerPopup";

import video from "/videos/blog.mp4"
import { Helmet } from "react-helmet-async";

function HomePage() {
  // const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Para ejecutarlo al cargar

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inicio | Odontología C.I.O.S Dental R&R</title>
        <meta name="description" content="Odontologia C.I.O.S Dental Parque Chacabuco. Consultorio odontológico en CABA. Atención personalizada en ortodoncia y estética dental." />
      </Helmet>



      <FlyerPopup />

      <HeroComponent
        video={video}
      />

      {/* Servicios clinicos */}
      <section
        id="servicios"
        className="services-clinics-contain space-section"
      >
        <HeaderTitleComponent
          h2="Priorizamos la calidad y atencion para con nuestros clientes"
          h3="Consultorio C.I.O.S. R&R"
          p="Cuando nos visites en Consultorio C.I.O.S. R&R, tu sonrisa es nuestra mayor prioridad. Nuestro equipo estara dedicado personalmente con, calidad y profezionalismo a tu servicio."
        />
        <ZoomOnScroll src={diente} alt="Descripción de la imagen" />


        <CardSection
          h2="Creando hermosas sonrisas para la familia"
          p="Esperamos darle la bienvenida a nuestra familia. Nuestra oficina es cálida y acogedora. Siempre será recibido con una sonrisa y tratado con la mayor dignidad y respeto. Participará activamente en su tratamiento y su voz será escuchada cuando tenga preguntas o inquietudes."
          src={consultorio}
        />
        <HeaderTitleComponent
          h2="Priorizamos la calidad y atencion para con nuestros clientes"
          h3="Servicios Clinicos"
          p="Contamos con todas las especialidades para brindarte un tratamiento adecuado a cuidado de tu salud oral. Nuestro objetivo es ayudar a cada paciente a lograr y mantener una salud dental duradera y una sonrisa hermosa. "
        />
        <article className="services-cards-container">
          {servicesClinics.map((service, index) => (
            <CardServicesComponent
              key={service.id}
              index={index}
              h2={service.title}
              img={service.img}
              p={service.p}
              className={index % 2 === 0 ? 'left' : 'right'}
              aosType={
                isMobile
                  ? 'fade-up'
                  : index % 2 === 0
                    ? 'fade-right'
                    : 'fade-left'
              }
            />
          ))}
        </article>
      </section>

      <section
        style={{
          marginTop: '80px',
          backgroundImage: "url('/img/hero-section-home1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          padding: '50px 0',

        }}

      >
        <ReviewBannerComponent
          p=" La doctora Seley Rodriguez fue una excelente profesional, se tomo el tiempo y cuidado personalizado por mi salud bucal,
            me ayudo por medio de varios tratamientos odontologicos a recuperar mi confianza y autoestima, ya asisto al consultorio desde el 2020 y nunca tuve ningun problema con los tratamientos y cuidados. Los recomiendo."
          autor="Juan H"
          start={100}
          end={204}
          exito="Reseñas 5 estrellas!"

        />
      </section>

      <TechnologySection />


      <DoctorProfile
        p={
          "La doctora Seley practico odontologia por mas 20 años, se recibio en la facultad de odontologia de la UBA en el 2005, ella hace sentir confotable y le da una guia a los pacientes y colegas con los que trabaja.\n" + "\n" +
          "Ella aun continua educandoce en tecnicas y tratamientos junto nuevas habilidades para brindarle el mejor de los cuidados a sus pacientes, ella junto a su equipo han logrado crear un consultorio totalmente admirable."
        }
        pathUrl="/about"
        path="Nosotros"
      />

      <section
        style={{
          // marginTop: '80px',
          backgroundImage: "linear-gradient(rgba(214, 217, 219, 0.7), rgba(214, 217, 219, 0.8)),url('/img/hero-section-home1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          padding: '20px ',
          margin: "80px 20px",
          borderRadius: '10px',
        }}
      >
        <HeaderTitleComponent
          h2="Una visita panoramica de nuestro consultorio"
          p="No dude en entrar en contacto si tiene alguna duda, estamos dispuesto a responder."
        />
      </section>

      <ContactInfo />
      <GoogleMapEmbed />


    </>
  );
}

export default HomePage;
