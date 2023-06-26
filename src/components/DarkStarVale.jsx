import data from "../data/dsvCharacters.json";
import DSVCharacterCard from "./DSVCharacterCard";

export default function DarkStarVale() {
  return (
    <main>
      <div id="DarkStarVale">
        <h1>DarkStar Vale</h1>
        <ul id ="dsv-cast">
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
