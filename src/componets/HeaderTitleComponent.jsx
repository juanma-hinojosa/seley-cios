/* eslint-disable react/prop-types */
import "../css/header-title-component.css";
function HeaderTitleComponent(props) {
  return (
    <header className="poppins-regular header-component-container">
      <article>
        <div>
          <h2>{props.h2}</h2>
        </div>
        <div>
          <div className="subtitle-container">
            <h3 className="poppins-semibold">
              <i className="fa-solid fa-circle"></i>
              {props.h3}
            </h3>
          </div>

          <p className="poppins-semibold">{props.p}</p>
        </div>
      </article>
    </header>
  );
}

export default HeaderTitleComponent;
