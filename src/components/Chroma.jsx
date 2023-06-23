import data from "../data/chromaSphereSystem.json";
import SphereCard from "./SphereCard";

export default function Chroma() {
  return (
    <main>
      <div id="Chroma">
        <h1>Chroma Sphere System</h1>
        <ul id="spheres">
          {data.chroma.map((sphere) => {
            return <SphereCard key={sphere.id} id={sphere.id} name={sphere.name} />;
          })}
        </ul>
      </div>
    </main>
  );
}
