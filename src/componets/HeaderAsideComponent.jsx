/* eslint-disable react/prop-types */
import "../css/header-aside-component.css";
function HeaderAsideComponent(props) {
  return (
    <article className="header-aside-container">
      <header>
        <div>
          <h3 className="poppins-semibold">
            <i className="fa-solid fa-circle"></i>
            {props.h3}
          </h3>
        </div>
        <h2 className="poppins-semibold">{props.h2}</h2>
      </header>
      <p className="poppins-semibold">{props.p}</p>
    </article>
  );
}

export default HeaderAsideComponent;
