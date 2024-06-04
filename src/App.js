import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Gravitas from './components/Gravitas/Gravitas';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Publication from './components/Publication/Publication';
import Sponsors from './components/Sponsors/Sponsors';
import Categories from "./components/Categories/Categories"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Categories/>
      <Gravitas/>
      
      <Publication/>
      <FAQ/>
      <Sponsors/>
      <Contact/>
      
    </div>
  );
}

export default App;
