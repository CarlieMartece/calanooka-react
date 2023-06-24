import data from "../data/dsvCharacters.json";
import DSVCharacterCard from "./DSVCharacterCard";

export default function DarkStarVale() {
  return (
    <main>
      <div id="dark-star-vale">
        <h1>DarkStar Vale</h1>
        <ul>
          {data.dsv.map((character) => {
            return (
              <DSVCharacterCard key={character.id} id={character.id} name={character.name} />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
