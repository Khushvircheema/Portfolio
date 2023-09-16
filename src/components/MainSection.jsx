import { useEffect, useRef } from "react";
import Typed from "typed.js";
function MainSection({ photo }) {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `Full Stack MERN Web Developer`,
        "Electronics Engineering Technician",
        "Certified Project Manager",
      ],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section id="main">
      <div className="intro">
        <h2>Hi, I'm Khushvir</h2>
        <p className="typer">
          A <span ref={el}></span>
        </p>
        <ul className="socialMedia links">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/khushvircheema/"
            >
              <img
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Khushvircheema"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/nolan/64/github.png"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div>

      <img className="myImage" src={photo[2].src} alt="Portfolioimage" />
    </section>
  );
}
export default MainSection;
