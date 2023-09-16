function AboutMe({ photo }) {
  return (
    <section id="AboutMe">
      <h2 id="AboutMeTitle">About Me</h2>
      <p>
        <img src={photo[3].src} alt="myphoto" />
        <br />
        <br />
        👋 Hey there! I'm Khushvir Singh Cheema, a passionate Full Stack Web
        Developer with a unique blend of skills that span both the digital realm
        and the tangible world of electronics. <br />
        <br />
        🌐🔌 🧠 Armed with a Diploma in Electronics Engineering Technology, I've
        got a deep understanding of the intricacies of hardware systems and
        their inner workings. 📚 Further enhancing my expertise, I've also
        earned a Postgraduate Diploma in Project Management.
        <br />
        <br /> 💡 My journey has seen me bridging the gap between hardware and
        software, producing innovative web applications that interact with
        physical components, delivering a whole new level of interactivity and
        immersion. From e-commerce platforms that sync with IoT devices to data
        visualization dashboards for industrial processes, I thrive on
        transforming ideas into tangible, responsive digital solutions.
        <br /> <br />
        🌟 Let's connect and explore the possibilities! Whether it's optimizing
        user experiences, architecting seamless interfaces, or diving into the
        nuts and bolts of complex systems, I'm excited to bring my
        multidisciplinary background to the table. Let's collaborate on building
        the future together! 🚀🌐🔗
      </p>
    </section>
  );
}
export default AboutMe;
