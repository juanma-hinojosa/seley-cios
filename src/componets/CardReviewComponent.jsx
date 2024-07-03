/* eslint-disable react/prop-types */
import '../css/card-review-component.css'
function CardReviewComponent(props) {
  return (
    <figure className='poppins-regular review-container' key={props.id} >
      <div className='name-review'>
        <i className="fa-regular fa-user"></i>
        <h2>{props.name}</h2>
      </div>
      <div className='start-container'>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p>{props.p}</p>
    </figure>
  );
}

export default CardReviewComponent;
