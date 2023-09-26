import { useState } from "react";

function ProjectsSection({ data }) {
  const [slide, setSlide] = useState(0);
  function left() {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }
  function right() {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  return (
    <section id="Projects">
      <h2 id="ProjectsTitle">Projects</h2>

      <div className="caraousel">
        <img
          className="arrow leftArrow"
          width="60"
          height="60"
          src="https://img.icons8.com/ios/50/circled-left-2.png"
          alt="circled-left-2"
          onClick={left}
        />
        {data.map((item, index) => {
          return (
            <a href={item.link} className="projectLinks">
              <img
                alt={item.alt}
                src={item.src}
                key={index}
                className={slide === index ? "slide" : "slide slide-hidden"}
              />
            </a>
          );
        })}
        <img
          className="arrow rightArrow"
          width="60"
          height="60"
          src="https://img.icons8.com/ios/50/circled-right-2.png"
          alt="circled-right-2"
          onClick={right}
        />
        <span className="indicators">
          {data.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </section>
  );
}
export default ProjectsSection;
