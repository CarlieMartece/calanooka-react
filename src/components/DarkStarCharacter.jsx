import { useParams } from "react-router-dom";
import data from "../data/dsvCharacters.json";

export default function DarkStarCharacter () {
    const { characterId } = useParams();
    const character = data.dsv.find((object) => object.id === Number(characterId));
    console.log(character)
    return (
        <main>
            <h1>{character.name}</h1>
        </main>
    )
}