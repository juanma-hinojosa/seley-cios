import "../css/header-aside-component.css";
import ButtonArrowComponent from "./ButtonArrow";
import ButtonComponent from "./ButtonComponent";
function LocationMaps(props) {
  return (
    <article className="header-aside-container">
      <header>
        <div>
          <h3 className="poppins-semibold">
            <i className="fa-solid fa-circle"></i>
            {props.h3}
          </h3>
        </div>
      
      <p className="poppins-semibold">{props.p}</p>
      
      </header>
    </article>
  );
}

export default LocationMaps;