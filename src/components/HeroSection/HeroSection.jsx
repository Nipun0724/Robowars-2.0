import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const HeroSection = () => {
  const navigate = useNavigate();
  const threeContainerRef = useRef(null);

  const handleMatchesClick = () => {
    navigate('/tournament');
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(700, 700);  // Increased the size to match the larger container
    document.getElementById("three-robot-model").appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load("untitledhello3.gltf", (gltf) => {
      const model = gltf.scene;
      model.rotation.y = Math.PI / 4;

      model.scale.set(1.3, 1.3, 1.3); // Increased the model size

      model.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(0xffffff); 
        }
      });

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

  return (
    <motion.div className="hero-section">
      <div>

        <div id="three-robot-model" ref={threeContainerRef}></div>
      </div>
      <div className="content">
        <div className="title">
          <h1 className="herologo">ROBOWARS</h1>
        </div>
        <h2>FORGE<div>.</div>BATTLE<div>.</div>WRECK</h2>
        <p>
          EXPERIENCE THE THRILL OF COMBAT ROBOTICS AT ROBOWARS. REGISTER NOW TO BOOK YOUR SEAT AND WITNESS THE CLASH OF ROBOTS.
        </p>
        <div className="buttons">
          <button className="watch-live">Watch Live</button>
          <button className="matches" onClick={handleMatchesClick}>Matches</button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;