import { Link } from "react-router-dom";

export default function SphereCard({
    name
}) {

    return (
        <Link>
            <h2>{name}</h2>
        </Link>
    )
}