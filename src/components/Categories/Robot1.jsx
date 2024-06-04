import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./Robot.css";

const Robot1 = ({ asset, title }) => {
  const threeContainerRef1 = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth - 20;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    const scene = new THREE.Scene();
    scene.background = null; // Set background to null for transparency

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      2,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("three-container1")
      .appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(`${asset}`, (gltf) => {
      const model = gltf.scene;
      model.rotation.x = -0.3;
      model.rotation.y = 0;
      model.rotation.z = 0;
      if (window.innerWidth < 900) {
        model.scale.set(18, 18, 18);
      } else {
        model.scale.set(0.4, 0.4, 0.4);
      }
      scene.add(model);

      camera.position.set(0, 4, 10);
      if (window.innerWidth > 300) {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI * 4;
        controls.enableZoom = false;
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(0, 1, 0);
      scene.add(directionalLight);

      const animate = function () {
        requestAnimationFrame(animate);

        model.rotation.y += 0.005;

        renderer.render(scene, camera);
      };

      renderer.setSize(
        threeContainerRef1.current.clientWidth - 20,
        threeContainerRef1.current.clientHeight
      );

      window.addEventListener("resize", handleResize);

      animate();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      const threeContainer = document.getElementById("three-container");
      if (threeContainer && threeContainer.contains(renderer.domElement)) {
        threeContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="white-container">
      <div className="robot-container">
        <h2>{title}</h2>
        <div
          id="three-container1"
          ref={threeContainerRef1}
          style={{ paddingLeft: "400px" }}
        ></div>
           {" "}
      </div>
    </div>
  );
};

export default Robot1;
