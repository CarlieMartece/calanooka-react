import { useParams } from "react-router-dom";
import data from "../data/chromaSphereSystem.json";

export default function ChromaSphere() {
  const { sphereId } = useParams();
  const sphere = data.chroma.find((object) => object.id === sphereId);
  return (
    <main>
      <h1>{sphere.name}</h1>
      <span className="subtitle">({sphere.anagram})</span>
      <h2>Diameter: </h2>
      <span className="subtitle">{sphere.diameter} km (approx)</span>
      <h2>Colour: </h2>
      <span className="subtitle">{sphere.colour}</span>
      <h2>Citizens: </h2>
      <span className="subtitle">{sphere.citizens}</span>
      <h2>Traits: </h2>
      <span className="subtitle">{sphere.traits}</span>
      <h2>Weapons: </h2>
      <span className="subtitle">{sphere.weapons}</span>
      <h2>Further Information: </h2>
      <ul className="description">
        {sphere.description.map((paragraph) => {
          const descKey = paragraph.slice(0, 14);
          return <li key={descKey}>{paragraph}</li>;
        })}
      </ul>
    </main>
  );
}
