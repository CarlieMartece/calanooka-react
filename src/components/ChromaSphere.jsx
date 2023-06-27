import { useParams } from "react-router-dom";
import data from "../data/chromaSphereSystem.json";

export default function ChromaSphere() {  
  const { sphereId } = useParams();
  const sphere = data.chroma.find((object) => object.id === sphereId);
  return (
    <main>
      <h1>{sphere.name}</h1>
      <span className="subtitle">({sphere.anagram})</span>
      <div>
        <h2>Diameter: </h2>
        <span>{sphere.diameter} km (approx)</span>
      </div>
      <div>
        <h2>Colour: </h2>
        <span>{sphere.colour}</span>
      </div>
      <div>
        <h2>Citizens: </h2>
        <span>{sphere.citizens}</span>
      </div>
      <div>
        <h2>Traits: </h2>
        <span>{sphere.traits}</span>
      </div>
      <div>
        <h2>Weapons: </h2>
        <span>{sphere.weapons}</span>
      </div>
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
