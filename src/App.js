import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Sponsors from "./components/Sponsors/Sponsors";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Categories />
      <Gallery />
      <FAQ />
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;
