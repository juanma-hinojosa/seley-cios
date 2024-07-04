/* eslint-disable react/prop-types */
import "../css/button-component.css";
function ButtonComponent(props) {
  return (
    <a className="button-container poppins-regular" href="#">
      {props.nameLink}
    </a>
  );
}

export default ButtonComponent;
