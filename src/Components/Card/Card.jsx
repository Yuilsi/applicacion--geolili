import "./Card.css";
import { FaFlag } from "react-icons/fa";

export function Card({ name, location, navigateToModal }) {
  const handleCardClick = () => {
    navigateToModal();
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div>
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
      <FaFlag />
    </div>
  );
}
