import { Link } from "react-router-dom";

export default function DSVCharacterCard({ id, name }) {
    const link = `/dsv/${id}`;

  return (
    <li>
      <Link to={link}>
        <h2>{name}</h2>
      </Link>
    </li>
  );
}