import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Sponsors from "./components/Sponsors/Sponsors";
import Categories from "./components/Categories/Categories";
import { Route, Routes, useLocation } from "react-router-dom";
import Tournament from "./components/Tournament/Tournament";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <HeroSection />
              <About />
              <Categories />
              <Gallery />
              <FAQ />
              <Sponsors />
              <Contact />
            </div>
          }
        />
        <Route
          path="/tournament"
          element={
            <div>
              <Tournament />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
