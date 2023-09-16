function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer id="footer">
      <h3>contact me</h3>
      <ul className="links">
        <li>
          <a href="https://www.linkedin.com/in/khushvircheema/">
            <img
              target="_blank"
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

      <p>
        {" "}
        <br />
        ©️ {year}
      </p>
    </footer>
  );
}

export default Footer;
