import { useEffect, useState } from "react";

function Navbar({ photos }) {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav className="navbar">
      {" "}
      <a href="/">
        <h1>Khushvir Cheema</h1>
      </a>
      {(toggle || screenWidth > 600) && (
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#ProjectsTitle">Projects</a>
          </li>
          <li>
            <a href="#AboutMeTitle">About</a>
          </li>
          <li>
            <a href="#footer">Contact Me</a>
          </li>
        </ul>
      )}
      <button className="hamburger" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <img src={photos[1].src} alt={photos[1].alt} />
        ) : (
          <img src={photos[0].src} alt={photos[0].alt} />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
