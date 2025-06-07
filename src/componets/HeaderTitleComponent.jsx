/* eslint-disable react/prop-types */
import "../css/components/header-title-component.css";

function HeaderTitleComponent(props) {
  const renderParagraph = (text) => {
    // Dividir el texto por los saltos de línea y renderizar cada parte en un <span>
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <header className="header-component-container">
      <article>
        <div className="title-wrapper">
          <h3 data-aos="fade-up" className="poppins-semibold">{props.h3}</h3>
          <h2 data-aos="fade-up" className="poppins-light">{props.h2}</h2>
        </div>
        <div className="parrafo-wrapper">
          <p data-aos="fade-up" className="poppins-regular">{renderParagraph(props.p)} </p>
        </div>
      </article>
    </header>
  );
}

export default HeaderTitleComponent;
