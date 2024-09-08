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
import Tournament15 from "./components/Tournament/Tournament15";
import Tournament60 from "./components/Tournament/Tournament60";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function App() {
  const controls = useAnimation();
  useEffect(() => {
    // This will ensure controls.start() is called only after the component has mounted
    controls.start({
      opacity: 1, // Example animation
      transition: { duration: 1 },
    });
  }, [controls]);
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
