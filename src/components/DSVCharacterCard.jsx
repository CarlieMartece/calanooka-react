import { Link } from "react-router-dom";

export default function DSVCharacterCard({ id, name }) {
  const link = `/dsv/${id}`;
  const imgName = name.toLowerCase().split(" ").join("-");
  const imgSrc = require(`../images/preview/gc1-${imgName}.jpg`);

  return (
    <li>
      <Link to={link}>
        <img 
          alt={name}
          src={imgSrc}
        />
        <h2>{name}</h2>
      </Link>
    </li>
  );
}