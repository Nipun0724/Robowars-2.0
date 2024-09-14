import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Earth = () => {
  const earth = useGLTF('Asset 2.gltf');
  return (
    <primitive object={earth.scene} scale={0.13} position-y={0} rotation-y={0} />
  );
};

export const EarthCanvas2 = () => {
  return (
    <Canvas 
      shadows 
      frameloop='demand' 
      gl={{ preserveDrawingBuffer: true }} 
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={null}>
        {/* Orbit controls to allow camera movement */}
        <OrbitControls 
          autoRotate 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />

        {/* Lighting */}
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.3} />

        {/* Directional light for strong shadows */}
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />

        {/* SpotLight to highlight the model */}
        <spotLight 
          position={[10, 20, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={0.8} 
          castShadow 
        />

        {/* Point light for additional lighting */}
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Load and render the Earth model */}
        <Earth />

        {/* Preload assets */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
