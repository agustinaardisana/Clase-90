import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // iconos solidos
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"; // iconos regulares
// le cambio el nombre al desestructurar para no tener error por declarar la
// misma variable dos veces

const Rating = ({ rating }) => {
  console.log({ rating });
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }
  console.log(stars);
  return <div className="product__rating">{stars}</div>;
};

export default Rating;
