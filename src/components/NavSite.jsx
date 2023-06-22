import { Link } from "react-router-dom";

export default function NavSite() {
  const siteArray = [
    [0, "/css", "Chroma"],
    [1, "/dsv", "DarkStar Vale"],
  ];

  return (
    <>
      <header>
        <h1>Calanooka.com</h1>
        <nav id="nav-site">
          {siteArray.map((category) => {
            return (
              <Link
                className="nav-site-link"
                to={category[1]}
                key={category[0]}
              >
                {category[2]}
              </Link>
            );
          })}
        </nav>
      </header>
      <div id="separatorStripe"></div>
    </>
  );
}
