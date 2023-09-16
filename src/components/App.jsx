import Navbar from "./Navbar";
import MainSection from "./MainSection";
import ProjectsSection from "./ProjectesSection";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import slides from "../data/carouselData.json";

function App() {
  return (
    <>
      <Navbar photos={slides.assets} />
      <MainSection photo={slides.assets} />
      <ProjectsSection data={slides.slides} />
      <AboutMe photo={slides.assets} />
      <Footer />
    </>
  );
}

export default App;
