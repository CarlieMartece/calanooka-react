import { useParams } from "react-router-dom";
import data from "../data/dsvCharacters.json";

export default function DarkStarCharacter() {
  const { characterId } = useParams();
  const character = data.dsv.find(
    (object) => object.id === Number(characterId)
  );
  const imgName = character.name.toLowerCase().split(" ").join("-");
  const imgSrc = require(`../images/full/gc1-${imgName}.jpg`);
  const imgDesc = `${character.photoSource} interpretation of ${character.name}`;
  let chapter = character.firstChapter;
  if (chapter > 18) chapter = "Unknown";
  console.log(character);
  return (
    <main>
      <div className="picture-info">
        <div className="picture">
          <h1>{character.name}</h1>
          <figure>
            <img alt={character.name} src={imgSrc} />
            <figcaption>{imgDesc}</figcaption>
          </figure>
        </div>
        <section className="info">
          <h2>Introduced: </h2>
          <span>DarkStar Vale, Chapter {chapter}</span>
          <div>
            <h2>Birth Year: </h2>
            <span>{character.birthYear}</span>
          </div>
          <div>
            <h2>Present Colour: </h2>
            <span>{character.presentColour}</span>
          </div>
          <div>
            <h2>Present Pronouns: </h2>
            <span>{character.pronouns}</span>
          </div>
          <div>
            <h2>Family: </h2>
            <span>{character.family}</span>
          </div>
          <div>
            <h2>Last Known Address: </h2>
            <span>{character.address}</span>
          </div>
          <div>
            <h2>Short bio: </h2>
            <span>{character.bio}</span>
          </div>
        </section>
      </div>
    </main>
  );
}
