import { Link } from "react-router-dom";

export default function SphereCard({ id, name }) {
  const nameId = name.toLowerCase().split(" ").join("-");
  const link = `css/${id}`;
  console.log(nameId);

  return (
    <li className="sphere" id={nameId}>
      <Link to={link}>
        <h2>{name}</h2>
      </Link>
    </li>
  );
}
