import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Sponsors from "./components/Sponsors/Sponsors";
import Categories from "./components/Categories/Categories";
import { Route, Routes } from "react-router-dom";
import Tournament from "./components/Tournament/Tournament";
import Loadingpage from "./components/Loadingpage/Loadingpage";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [a, setA] = useState(100);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (a) {
      setTimeout(() => {
        setA(a - 1);
      }, 20);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [a]);
  const controls = useAnimation();
  useEffect(() => {
    // This will ensure controls.start() is called only after the component has mounted
    controls.start({
      opacity: 1, // Example animation
      transition: { duration: 1 },
    });
  }, [controls]);
  return (
    <div className="App" style={{ overflowX: "hidden", height: "100vh" }}>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loadingpage value={100 - a} />
            ) : (
              <div>
                <Navbar />
                <HeroSection />
                {/* <About /> */}
                <Categories />
                <Gallery />
                <FAQ />
                <Sponsors />
                <Contact />
              </div>
            )
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
