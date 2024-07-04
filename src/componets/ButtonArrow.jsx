/* eslint-disable react/prop-types */
import '../css/button-arrow.css'
function ButtonArrowComponent(props) {
    return(
        <a className="button-arrow poppins-regular" href="#">
            {props.nameLink}<i className="fa-solid fa-arrow-right"></i>
        </a>
    )
}

export default ButtonArrowComponent