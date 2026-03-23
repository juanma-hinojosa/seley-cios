import CardSection from "../componets/CardSection";
import ContactInfo from "../componets/ContactInfoComponent";
import DoctorProfile from "../componets/DoctorProfile";
import GoogleMapEmbed from "../componets/GoogleMaps";
import ReviewBannerComponent from "../componets/ReviewBannerComponent";
import family from "/img/family.jpg"
import HeroComponent from "../componets/HeroComponent";

import video from "/videos/nosotros.mp4"
import { Helmet } from "react-helmet-async";


function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Nosotros | Odontología C.I.O.S Dental R&R</title>
        <meta name="description" content="Odontologia C.I.O.S Dental Parque Chacabuco. Dentista Parque Chacabuco. Nosotros y nuestra historia." />
              <link rel="canonical" href="https://cios-consultorio.com/about" />

      </Helmet>

      <HeroComponent
        video={video}
      />

      <CardSection
        h2="Déjanos ser el dentista de tu familia"
        p="La Dra. Seley lleva 10 años trabajando como dentista general, atendiendo a familias la ciudad y la provinica de Buenos Aires. Odontologia C.I.O.S Dental se encuentra en Parque Chacabuco, cerca de Boedo. En Odontologia C.I.O.S Dental, nos esforzamos al máximo para restaurar y realzar la belleza natural de su sonrisa mediante procedimientos conservadores y de vanguardia. Creemos en la filosofía de la Odontología Mínimamente Invasiva, que consiste en conservar la estructura dental sana. "
        src={family}
      />
      <DoctorProfile
        p={
          "La doctora Seley practico odontologia por mas 20 años, se recibio en la facultad de odontologia de la UBA en el 2005, ella hace sentir confotable y le da una guia a los pacientes y colegas con los que trabaja.\n" + "\n" +
          "La doctora Seley trabaja con niños y las reseñas de sus pacientes ractifica el compromiso que tiene ella con cada uno de ellos.\n" + "\n" +
          "Ella aun continua educandoce en tecnicas y tratamientos junto nuevas habilidades para brindarle el mejor de los cuidados a sus pacientes, ella junto a su equipo han logrado crear un consultorio totalmente admirable."
        }
        bold="Nos regimos por la Regla de Oro: trata a los demás como te gustaría que te trataran, y practicamos esta filosofía a diario. Nuestro equipo te recibirá con una SONRISA y se asegurará de que te sientas completamente cómodo."
        pathUrl="/services"
        path="Especialidades"
      />

      <section
        style={{
          marginTop: '80px',
          backgroundImage: "url('/img/women.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          padding: '50px 0',

        }}
      >
        <ReviewBannerComponent
          p=" Me atendió la Dra Seley, quien fue excelente, me hizo sentir cómoda y se aseguró de que entendiera todo. El consultorio también está muy limpio, lo cual siempre se agradece. Gracias por una excelente primera experiencia y por hacer que la visita al dentista no fuera tan mala. 🙂 ¡5 estrellas!"
          autor="Vítoria L."
          start={100}
          end={530}
          exito="Tratamientos exitosos"
        />
      </section>

      <ContactInfo />
      <GoogleMapEmbed />
    </>
  )
}

export default AboutPage;