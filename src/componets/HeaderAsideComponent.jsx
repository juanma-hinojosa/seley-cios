/* eslint-disable react/prop-types */
import "../css/header-aside-component.css";
import ButtonArrowComponent from "./ButtonArrow";
import ButtonComponent from "./ButtonComponent";
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
      <div style={{marginTop:'20px'}}>
        <ButtonComponent nameLink="Ver Reels" />
        <ButtonArrowComponent nameLink="Whats App" />
      </div>
    </article>
  );
}

export default HeaderAsideComponent;
