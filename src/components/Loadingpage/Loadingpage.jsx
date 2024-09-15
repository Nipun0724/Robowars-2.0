import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "./Loadingpage.css";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Progressbar = ({ value }) => {
  const progressRef = useRef(null);
  const controls = useAnimation();
  const threeContainerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(500, 500);  // Increased the size to match the larger container
    document.getElementById("three-robot-model").appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load("ROBOWARSmainLOGO.glb", (gltf) => {
      const model = gltf.scene;
      model.rotation.y = Math.PI / 4;

      model.scale.set(1.6, 1.6, 1.6); // Increased the model size
      scene.add(model);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.maxPolarAngle = Math.PI / 2;

      camera.position.set(0, 0, 5.5);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xff8c00, 2);
      directionalLight.position.set(0, 10, 10).normalize();
      scene.add(directionalLight);

      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.005;
        renderer.render(scene, camera);
      };

      animate();
    });

    const handleResize = () => {
      const newWidth = 500;
      const newHeight = 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      const threeContainer = document.getElementById("three-robot-model");
      if (threeContainer && threeContainer.contains(renderer.domElement)) {
        threeContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (value === 100) {
      controls.start("fading"); // Start fade-out animation
    }
  }, [value, controls]);

  return (
    <motion.div
      className="progressbar-container"
      ref={progressRef}
      variants={{
        fading: { opacity: 0, y: "100%" }, // Fade out and slide down
      }}
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={controls}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bar-contain"
      >
                <div id="three-robot-model" ref={threeContainerRef}></div>
        <div className="progressbar">
          <motion.div
            className="bar"
            animate={{
              width: `${value}%`, // Animate width based on the progress value
            }}
            transition={{
              ease: "linear", // Smooth linear transition
            }}
          />
        </div>
        <div className="loading-text">L o a d i n g</div>
      </div>
    </motion.div>
  );
};

export default Progressbar;
