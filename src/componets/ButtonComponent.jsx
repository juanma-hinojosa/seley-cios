/* eslint-disable react/prop-types */
import '../css/button-component.css'
function ButtonComponent(props) {
  return (
    <div className='button-container'>
      <a href="#">{props.nameLink}</a>
    </div>
  );
}

export default ButtonComponent;
