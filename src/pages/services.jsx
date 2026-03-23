import CardComponent from "../componets/CardComponent";
import CardSection from "../componets/CardSection";
import ContactInfo from "../componets/ContactInfoComponent";
import GoogleMapEmbed from "../componets/GoogleMaps";
import HeaderTitleComponent from "../componets/HeaderTitleComponent";
import TechnologySection from "../componets/TechnologySection";
import { servicesClinics } from "../js/services-list";
import consultorio from "/img/consultorio.webp"
import HeroComponent from "../componets/HeroComponent";

import video from "/videos/especialidades.mp4"
import { Helmet } from "react-helmet-async";


function ServicesPages(params) {
  return (
    <>
      <Helmet>
        <title>Especialidades | Odontología C.I.O.S Dental R&R</title>
        <meta name="description" content="Odontologia C.I.O.S Dental Parque Chacabuco. Dentista Parque Chacabuco. Atención personalizada en una gran variedad de especialidades." />
        <link rel="canonical" href="https://cios-consultorio.com/services" />

      </Helmet>

      <HeroComponent

        video={video}
      />
      <section>
        <CardSection
          h2="Haz un recorrido"
          p='Al ingresar a  Odontologia C.I.O.S. Dental R&R, antes de entrar a las salas de tratamiento, pasará por el área de esterilización y podrá observar con sus propios ojos el moderno "Centro de Esterilización". El control de infecciones en nuestra clínica también es muy importante para nosotros. '
          src={consultorio}
        />
      </section>

      <HeaderTitleComponent
        h2="Dedicado a la comodidad del paciente"
        p={
          "Para proteger a nuestros pacientes y a nuestro equipo, mantenemos estrictamente los procesos de esterilización y contaminación cruzada utilizando estándares recomendados por la Asociación Dental Americana (ADA), la Administración de Seguridad y Salud Ocupacional (OSHA) y el Centro para el Control de Enfermedades (CDC)."}
      />

      <TechnologySection />

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

      <HeaderTitleComponent
        h2="El principal centro de odontología de Parque Chacabuco para niños y adultos"
        h3="Tratamientos"
        p={
          "Si ocurre una emergencia dental, haremos todo lo posible para verlo y atenderlo lo antes posible y podrá entrar y salir el mismo día.\n" + "\n" +
          "Como consultorio, creemos firmemente que la atención preventiva y la educación son clave para una salud dental óptima. Nuestro objetivo en Odontologia C.I.O.S. Dental R&R es que todos nuestros pacientes estén libres de caries. Nos esforzamos por brindar atención dental de calidad."
        }
      />

      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          padding: "2rem"
        }}

      >
        {servicesClinics.map((card, index) => (
          <CardComponent
            key={index}
            {...card}
          />
        ))}

      </section>


      <HeaderTitleComponent
        h2="Reseñas de Pacientes"
        p={
          "A continuación proporcionamos una selección de declaraciones de nuestros pacientes que hablan sobre su experiencia positiva con nosotros."}
      />






      <ContactInfo />
      <GoogleMapEmbed />
    </>
  )
}

export default ServicesPages;