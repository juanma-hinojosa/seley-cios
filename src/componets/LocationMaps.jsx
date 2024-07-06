/* eslint-disable react/prop-types */
import "../css/header-aside-component.css";
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
      <h2 className="poppins-semibold">{props.h2}</h2>
      
      <p className="poppins-semibold">{props.p0}</p>
      <p className="poppins-semibold">{props.p1}</p>
      <p className="poppins-semibold">{props.p2}</p>
      <p className="poppins-semibold">{props.p3}</p>
      
      </header>
    </article>
  );
}

export default LocationMaps;