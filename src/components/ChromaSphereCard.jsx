export default function SphereCard({ id, name }) {
  const nameId = name.toLowerCase().split(" ").join("-");
  const link = `css/${id}`;

  return (
    <li className="sphere" id={nameId}>
      <a href={link}>
        <h2>{name}</h2>
      </a>
    </li>
  );
}
