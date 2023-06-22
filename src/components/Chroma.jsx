import data from "../data/chromaSphereSystem.json";
import SphereCard from "./SphereCard";

export default function Chroma() {
  console.log(data);
  return (
    <main>
      <div id="Chroma">
        <h2>Chroma Sphere System</h2>
        <ul id="spheres">
          {data.chroma.map((sphere) => {
            return <SphereCard key={sphere.id} name={sphere.name} />;
          })}
        </ul>
      </div>
    </main>
  );
}
