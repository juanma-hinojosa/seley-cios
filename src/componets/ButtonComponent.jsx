/* eslint-disable react/prop-types */
import "../css/button-component.css";
function ButtonComponent(props) {
  return (
    <a target="_blank" className="button-container poppins-regular" href={props.url}>
      {props.nameLink}
    </a>
  );
}

export default ButtonComponent;
